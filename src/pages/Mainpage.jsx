import { Card } from "../components/Card/Card";
import icon from "../assets/icons/shoppingBag.svg";
import { products } from "../mocks/products";

export function MainPage() {
  return (
    <div className="bg-white flex flex-col gap-10 justify-center items-center overflow-x-hidden">
      <header className="flex flex-col sm:flex-row justify-between items-center w-full h-auto sm:h-[110px] px-4 sm:px-8 lg:px-[80px] py-4 sm:py-0 gap-4 sm:gap-0">
        <a
          href="/"
          className="w-[150px] sm:w-[190px] h-[50px] bg-[#064087] flex justify-center items-center rounded-[6px]"
        >
          <span className="text-white font-bold text-sm">ЛОГО</span>
        </a>
        <div className="flex flex-row sm:relative">
          <a
            href="tel:+78129444490"
            className="text-[#064087] font-bold sm:pr-20 "
          >
            <span className="text-sm">+7 (812) </span>
            <span className="text-[20px] sm:text-[22px]">944-44-90</span>
          </a>
          <div className="w-[48px] sm:w-[64px] h-[70px] sm:h-[95px] bg-[#064087] flex justify-center items-center sm:rounded-b-[6px] absolute sm:-top-11 top-15 rounded-l-[6px]  right-0">
            <img
              alt="shopping card icon"
              className="h-5 w-5 sm:h-6 sm:w-6"
              src={icon}
            />
          </div>
        </div>
      </header>
      <section className="w-full px-4 sm:px-8 lg:px-4 max-w-[1280px] flex flex-col gap-5">
        <nav aria-label="breadcrumbs">
          <ol className="flex gap-2 text-[#575757] text-sm font-normal">
            <li>
              <a href="/">Главная</a>
            </li>
            <li>/</li>
            <li>
              <a href="/menu">Меню</a>
            </li>
            <li>/</li>
            <li>Категория товаров</li>
          </ol>
        </nav>
        <h2 className="text-[#064087] text-[36px] sm:text-[42px] lg:text-[54px] font-extrabold">
          Название категории
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center">
          {products.map((product) => (
            <li key={product.id}>
              <Card
                key={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                cover={product.image}
                glutenFree={product.glutenFree}
              />
            </li>
          ))}
        </ul>
      </section>
      <footer className="w-full min-h-[200px] sm:h-[300px] bg-[#EDEDED] mt-10">
        <div className="max-w-[1280px] mx-auto px-6 h-full flex items-center justify-center">
          <span className="text-[#064087] text-sm font-bold">ПОДВАЛ САЙТА</span>
        </div>
      </footer>
    </div>
  );
}
