import { useCollection } from '@Src/hooks/api/collection-hooks';
import { nonArray } from '@Src/utils/type-utils';
import { useRouter } from 'next/router';

export default function Collection() {
  const { query } = useRouter();

  const { data: collection, isLoading, isError } = useCollection(nonArray(query.address));

  if (isError) {
    return (
      <>
        <h1>Error!</h1>
        <p>Oops, something went wrong, we&apos;re working on it!</p>
      </>
    );
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <h1>Hello collection! {JSON.stringify(collection)}</h1>;
}
