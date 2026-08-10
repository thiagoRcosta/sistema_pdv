interface TitleInterface {
  title: string;
}

function Title({ title }: TitleInterface) {
  return <h1 className="titulo text-2xl text-center">{title}</h1>;
}

export default Title;
