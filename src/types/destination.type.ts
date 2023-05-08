import Experience from "./experience.type";

type Destination = {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  experiences: Experience[];
};

export default Destination;