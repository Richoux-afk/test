import glutenFreeIcon from "../../assets/icons/glutenFree.png";

export function Card({ title, description, price, cover, glutenFree }) {
  return (
    <div className="flex flex-col w-full max-w-[305px] h-auto rounded-[10px] shadow-[0px_15px_20px_rgba(0,0,0,0.05)] bg-white">
      <div className="relative w-full h-[205px] flex justify-center items-center overflow-hidden">
        <img
          src={cover}
          alt="image of product"
          className="w-[80%] h-auto object-cover"
        />
        {glutenFree && (
          <img
            src={glutenFreeIcon}
            alt="Gluten Free"
            className="absolute top-2 right-2 w-[32px] h-[32px]"
          />
        )}
      </div>
      <div className="flex flex-col justify-between p-5 gap-5">
        <div className="flex flex-col gap-[10px]">
          <h3 className="text-black text-2xl font-bold">{title}</h3>
          <p className="text-[#AAAAAA] text-sm min-h-[85px]">{description}</p>
        </div>
        <div className="flex flex-row border-2 border-[#F1F1F1] rounded-full h-[53px] font-normal">
          <button className="text-[#717171] w-1/2 text-[16px]">Стандарт</button>
          <button className="text-[#3C3C3C] bg-[#EDEDED] rounded-full w-1/2 text-[16px]">
            Двойной
          </button>
        </div>
        <div className="flex flex-row justify-between items-center">
          <p className="text-black text-2xl font-extrabold">{price} ₽</p>
          <button className="bg-[#EA5F0A] text-white font-extrabold text-base lg:px-6 sm:px-12 px-10 py-4 rounded-full">
            Заказать
          </button>
        </div>
      </div>
    </div>
  );
}
