export default function PageTitle({
    params,
  }: Readonly<{
    params: { title: string };
  }>) {
    return <h1 className="text-titleBlue font-bold text-3xl pt-8 pb-12 px-12 underline">{params.title}</h1>;
  }
  