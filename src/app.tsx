import { FC } from "react";

type Gist = {
  id: string;
  description: string;
};

type Props = {
  gists: Gist[];
};

const App: FC<Props> = ({ gists }) => {
  return (
    <>
      <ol>
        {gists.map((gist) => (
          <li key={gist.id}>{gist.description}</li>
        ))}
      </ol>
    </>
  );
};

export default App;
