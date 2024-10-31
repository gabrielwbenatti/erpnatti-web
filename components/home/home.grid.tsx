type HomeGridComponentProp = {
  id: number;
  caption: string;
  route?: string;
};

const HomeGridItem = ({ item }: { item: HomeGridComponentProp }) => (
  <a href={item.route ? item.route : "#"}>
    <div className="box-border rounded-lg border-2 border-transparent hover:border-2 hover:border-light-onPrimaryContainer">
      <div className="flex h-48 select-none flex-col items-center justify-center gap-6 rounded-lg bg-light-surfaceContainer p-4 text-center">
        <span className="font-semibold uppercase text-light-onPrimaryContainer">
          {item.caption}
        </span>
      </div>
    </div>
  </a>
);

export default function HomeGridComponent({
  atalhos,
}: {
  atalhos: HomeGridComponentProp[];
}) {
  return (
    <div className="mx-4 mt-6 sm:mx-4 md:mx-6">
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {atalhos.map(
          (atalho) =>
            atalho.route && (
              <li key={atalho.id}>
                <HomeGridItem item={atalho} key={atalho.id} />
              </li>
            ),
        )}
      </ul>
    </div>
  );
}
