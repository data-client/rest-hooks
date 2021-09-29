import React, { Suspense, memo, useMemo, version } from 'react';

function BackupBoundary({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  // since Suspense does not introduce DOM elements, this should not affect rehydration.
  if (
    (version.startsWith('16') || version.startsWith('17')) &&
    typeof window === 'undefined'
  )
    return children as JSX.Element;
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
}
export default memo(BackupBoundary);

function Loading() {
  let message: React.ReactNode = 'loading...';
  /* istanbul ignore else */
  if (process.env.NODE_ENV !== 'production') {
    // env should not change during runtime and this excludes from build
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useMemo(() => {
      console.warn(
        `Uncaught suspense.
Make sure to add your own Suspense boundaries: https://resthooks.io/docs/getting-started/data-dependency#async-fallbacks`,
      );
    }, []);

    message = (
      <>
        <span>Uncaught Suspense.</span>
        Try
        <a href="https://resthooks.io/docs/getting-started/data-dependency#async-fallbacks">
          adding a suspense boundary
        </a>
      </>
    );
  }
  return <div>{message}</div>;
}
