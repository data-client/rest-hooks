import { HeartOutlined } from '@ant-design/icons';

import { createGithubResource, GithubEntity } from './Base';
import PreviewEndpoint from './PreviewEndpoint';
import { User } from './User';

export type ReactionType =
  | '+1'
  | '-1'
  | 'laugh'
  | 'confused'
  | 'heart'
  | 'hooray'
  | 'eyes'
  | 'rocket';

const Plus = (...args: any[]): any => '👍';
const Minus = (...args: any[]): any => '👎';
const Party = (...args: any[]): any => '🎉';
const Confused = (...args: any[]): any => '😕';
const Laugh = (...args: any[]): any => '😄';
const Rocket = (...args: any[]): any => '🚀';
const Eyes = (...args: any[]): any => '👀';

export const contentToIcon = {
  '+1': <Plus />,
  '-1': <Minus />,
  laugh: <Laugh />,
  confused: <Confused />,
  heart: <HeartOutlined />,
  hooray: <Party />,
  rocket: <Rocket />,
  eyes: <Eyes />,
} as const;

export class Reaction extends GithubEntity {
  readonly user: User = User.fromJS({});
  readonly content: ReactionType = '+1';
  readonly createdAt: Date = new Date(0);

  get contentIcon() {
    return contentToIcon[this.content];
  }

  pk() {
    return this.id?.toString();
  }

  static schema = {
    user: User,
    createdAt: Date,
  };
}

const base = createGithubResource(
  '/repos/:owner/:repo/issues/:number/reactions/:id' as const,
  Reaction,
  PreviewEndpoint,
);
export const ReactionResource = {
  ...base,
  getByComment: base.getList.extend({
    urlRoot: 'repos/:owner/:repo/issues/comments/:comment/reactions' as const,
    body: undefined,
  }),
};
ReactionResource.create = ReactionResource.create.extend({
  update: (newId: string, params: any) => ({
    [ReactionResource.getList.key(params)]: ({
      results = [],
      ...rest
    } = {}) => ({ results: [...new Set([newId, ...results])], ...rest }),
  }),
  getOptimisticResponse: (snap, params, body) => body,
});
ReactionResource.delete = ReactionResource.delete.extend({
  getOptimisticResponse: (snap, params) => params,
});

export default ReactionResource;
