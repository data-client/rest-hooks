import React, { useContext, memo, useRef, forwardRef } from 'react';

import CodeProvider from './CodeProvider';
import CodeTabContext from './CodeTabContext';
import HooksPlayground from '../HooksPlayground';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// eslint-disable-next-line react/display-name
const DemoPlayground = memo(
  forwardRef((props, ref: React.RefObject<HTMLDivElement>) => {
    const { selectedValue, values } = useContext(CodeTabContext);

    return (
      <div ref={ref}>
        {values.map(({ value, code, fixtures, autoFocus = false }) => (
          <HooksPlayground
            groupId="homepage-demo"
            row
            key={value}
            hidden={value !== selectedValue}
            fixtures={fixtures}
          >
            {Object.entries(code).map(([path, instanceCode], i) => {
              return (
                <code
                  key={path}
                  title={capitalizeFirstLetter(path)}
                  path={`${value}/${path}.tsx`}
                  collapsed={Object.values(code).length !== i + 1}
                  autoFocus={autoFocus && Object.values(code).length === i + 1}
                >
                  {instanceCode}
                </code>
              );
            })}
          </HooksPlayground>
        ))}
      </div>
    );
  }),
);

interface Props<T extends string> {
  codes: { label: string; value: T; endpointCode: string; code: string }[];
  defaultValue: T;
}

export default function CodeEditor<T extends string>({
  codes,
  defaultValue,
}: Props<T>) {
  const playgroundRef = useRef();

  return (
    <CodeProvider
      defaultValue={defaultValue}
      groupId="protocol"
      values={codes}
      playgroundRef={playgroundRef}
    >
      <DemoPlayground ref={playgroundRef} />
    </CodeProvider>
  );
}
