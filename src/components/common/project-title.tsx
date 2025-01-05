export default function ProjectTitle({
    params,
  }: Readonly<{
    params: { title: string };
  }>) {
    return <h1 className="text-titleBlue font-bold text-3xl pt-8 pb-2 px-12 text-center">{params.title}</h1>;
  }
  