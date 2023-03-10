import Mdx from 'Mdx.mdx';
import { ComixPanel } from 'ComixPanel';

const comixPanel = 'comix-panel';

export const App = () => (
  <div class="flex flex-col items-center justify-center h-screen bg-sky-500">
    <Mdx
      components={{
        ComixPanel: () => <ComixPanel src="" alt={comixPanel} title={comixPanel} />
      }}
    />
  </div>
);
