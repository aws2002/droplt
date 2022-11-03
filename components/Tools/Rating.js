import { RiStarFill, RiStarHalfFill, RiStarLine } from "react-icons/ri";
function getStars(value) {
  const stars = [];
  const [whole, part] = parseFloat(value).toString().split(".");
  for (let i = 0; i < whole; i++)
    stars.push(<RiStarFill className=" inline ml-1" />);
  if (part) stars.push(<RiStarHalfFill className="inline ml-1" />);
  for (let i = whole; i < (part ? 4 : 5); i++)
    stars.push(<RiStarLine className="inline ml-1" />);
  return stars;
}
export default function Rating({ value }) {
  return (
    <>
      {getStars(value).map((value, index) => (
        <i className=" text-[#FF914D] aws2002" key={index}>
          {value}
        </i>
      ))}
    </>
  );
}
