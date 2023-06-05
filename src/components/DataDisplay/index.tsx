import "./style.css";

interface Props {
  title: string;
  data: number | string;
}

const DataDisplay = ({ title, data }: Props) => {
  return (
    <div className="DataDisplay">
      <p className="DataDisplayTitle">{title}</p>
      <p className="DataDisplayData">{data}</p>
    </div>
  );
};

export default DataDisplay;
