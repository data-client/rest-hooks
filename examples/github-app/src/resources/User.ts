import { createGithubResource, GithubEndpoint, GithubEntity } from './Base';

export class User extends GithubEntity {
  readonly nodeId: string = '';
  readonly login: string = '';
  readonly avatarUrl: string = '';
  readonly gravatarUrl: string = '';
  readonly gravatarId: string = '';
  readonly type = 'User' as const;
  readonly siteAdmin: boolean = false;
  readonly htmlUrl: string = '';
  readonly followersUrl: string = '';
  readonly followingUrl: string = '';
  readonly gistsUrl: string = '';
  readonly starredUrl: string = '';
  readonly subscriptionsUrl: string = '';
  readonly organizationsUrl: string = '';
  readonly eventsUrl: string = '';
  readonly receivedEventsUrl: string = '';

  readonly name: string = '';
  readonly company: string = '';
  readonly blog: string = '';
  readonly location: string = '';
  readonly email: string = '';
  readonly hireable: boolean = false;
  readonly bio: string = '';
  readonly publicRepos: number = 0;
  readonly publicGists: number = 0;
  readonly followers: number = 0;
  readonly following: number = 0;
  readonly createdAt: Date = new Date(0);
  readonly updatedAt: Date = new Date(0);
  readonly privateGists: number = 0;
  readonly totalPrivateRepos: number = 0;
  readonly ownedPrivateRepos: number = 0;
  readonly collaborators: number = 0;

  static schema = {
    createdAt: Date,
    updatedAt: Date,
  };

  pk() {
    return this.login;
  }
}
export const UserResource = {
  ...createGithubResource('/users/:login' as const, User),
  current: new GithubEndpoint({
    urlRoot: '/user' as const,
    schema: User,
  }),
};

export default UserResource;
