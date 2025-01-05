export default function SectionTitle({
    params,
  }: Readonly<{
    params: { title: string };
  }>) {
    return <h1 className="text-titleBlue font-bold text-xl pt-8 pb-2">{params.title}</h1>;
  }
  