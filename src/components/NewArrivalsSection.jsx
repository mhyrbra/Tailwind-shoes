import Card from "./Card";

const NewArrivalsSection = ({ items }) => {
  return (
    <div className="mt-20">
      <div className="flex-center">
        <div className="bg-[url('src/assets/lines.png')] bg-center text-4xl font-extrabold">
          NEW ARRIVALS
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivalsSection;
