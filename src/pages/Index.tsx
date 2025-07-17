import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const products = [
    {
      id: 1,
      name: 'Ароматические свечи',
      description: 'Премиальные свечи из натурального воска с изысканными ароматами',
      price: '2,500₽',
      image: '/img/584f3f6f-52e6-4524-8555-6d1543de007e.jpg',
      badge: 'Бестселлер'
    },
    {
      id: 2,
      name: 'Дизайнерские стикеры',
      description: 'Коллекция премиальных стикеров с золотым тиснением',
      price: '1,200₽',
      image: '/img/4e61103e-fa65-44b5-b648-7faa785435c7.jpg',
      badge: 'Новинка'
    },
    {
      id: 3,
      name: 'Ароматические саше',
      description: 'Натуральные саше с сухими цветами и травами',
      price: '800₽',
      image: '/img/fa2a4235-62f2-4d16-b78a-d5a6e17294a7.jpg',
      badge: 'Эко'
    }
  ];

  const reviews = [
    {
      name: 'Анна Петрова',
      rating: 5,
      text: 'Потрясающее качество! Свечи горят очень долго, а аромат просто волшебный.',
      avatar: '👩‍🎨'
    },
    {
      name: 'Михаил Сидоров',
      rating: 5,
      text: 'Заказывал стикеры для своей студии — качество печати и материалов на высоте.',
      avatar: '👨‍💼'
    },
    {
      name: 'Елена Иванова',
      rating: 5,
      text: 'Саше создают невероятную атмосферу в доме. Натуральные и долговечные.',
      avatar: '👩‍🏫'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-dark rounded-lg flex items-center justify-center">
                <Icon name="Palette" className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-display font-bold text-primary">ArtCraft</h1>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#catalog" className="text-gray-700 hover:text-primary transition-colors font-body">Каталог</a>
              <a href="#delivery" className="text-gray-700 hover:text-primary transition-colors font-body">Доставка</a>
              <a href="#payment" className="text-gray-700 hover:text-primary transition-colors font-body">Оплата</a>
              <a href="#reviews" className="text-gray-700 hover:text-primary transition-colors font-body">Отзывы</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors font-body">О нас</a>
              <a href="#contacts" className="text-gray-700 hover:text-primary transition-colors font-body">Контакты</a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="hidden sm:flex">
                <Icon name="Search" className="w-4 h-4 mr-2" />
                Поиск
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="ShoppingCart" className="w-4 h-4 mr-2" />
                Корзина
              </Button>
              <Button className="md:hidden">
                <Icon name="Menu" className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-transparent via-gray-700 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Создавайте <span className="text-gold">магию</span> каждый день
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-body leading-relaxed">
              Премиальные товары для творчества и создания уютной атмосферы в вашем доме
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button size="lg" className="bg-gold hover:bg-gold-dark text-black font-semibold px-8 py-3 text-lg">
                <Icon name="ShoppingBag" className="w-5 h-5 mr-2" />
                Перейти в каталог
              </Button>
              <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-black px-8 py-3 text-lg">
                <Icon name="Play" className="w-5 h-5 mr-2" />
                Посмотреть видео
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" className="w-8 h-8 text-gold-dark" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">Быстрая доставка</h3>
              <p className="text-gray-600 font-body">Доставляем по всей России за 1-3 дня</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" className="w-8 h-8 text-gold-dark" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">Гарантия качества</h3>
              <p className="text-gray-600 font-body">Только премиальные материалы</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" className="w-8 h-8 text-gold-dark" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">Ручная работа</h3>
              <p className="text-gray-600 font-body">Каждый товар создан с любовью</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Catalog */}
      <section id="catalog" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
              Популярные товары
            </h2>
            <p className="text-xl text-gray-600 font-body max-w-2xl mx-auto">
              Откройте для себя нашу коллекцию товаров для творчества и создания уютной атмосферы
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-gold text-black font-semibold">
                    {product.badge}
                  </Badge>
                </div>
                
                <CardHeader>
                  <CardTitle className="font-display text-xl text-primary group-hover:text-gold transition-colors">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="font-body text-gray-600">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex items-center justify-between">
                  <span className="text-2xl font-display font-bold text-primary">{product.price}</span>
                  <Button className="bg-primary hover:bg-gold hover:text-black transition-colors">
                    <Icon name="ShoppingCart" className="w-4 h-4 mr-2" />
                    В корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
              Отзывы покупателей
            </h2>
            <p className="text-xl text-gray-600 font-body max-w-2xl mx-auto">
              Узнайте, что говорят наши клиенты о качестве наших товаров
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="text-6xl mb-4">{review.avatar}</div>
                  <CardTitle className="font-display text-lg text-primary">{review.name}</CardTitle>
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="w-5 h-5 text-gold fill-current" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 font-body italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Info Sections */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Delivery */}
            <div id="delivery">
              <h3 className="text-3xl font-display font-bold text-primary mb-6">Доставка</h3>
              <div className="space-y-4 font-body text-gray-600">
                <div className="flex items-start space-x-3">
                  <Icon name="Truck" className="w-6 h-6 text-gold mt-1" />
                  <div>
                    <p className="font-semibold text-primary">Курьерская доставка</p>
                    <p>По Москве и СПб — 1-2 дня, 300₽</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Package" className="w-6 h-6 text-gold mt-1" />
                  <div>
                    <p className="font-semibold text-primary">Почта России</p>
                    <p>По всей России — 3-7 дней, 250₽</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Gift" className="w-6 h-6 text-gold mt-1" />
                  <div>
                    <p className="font-semibold text-primary">Бесплатная доставка</p>
                    <p>При заказе от 3000₽</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment */}
            <div id="payment">
              <h3 className="text-3xl font-display font-bold text-primary mb-6">Оплата</h3>
              <div className="space-y-4 font-body text-gray-600">
                <div className="flex items-start space-x-3">
                  <Icon name="CreditCard" className="w-6 h-6 text-gold mt-1" />
                  <div>
                    <p className="font-semibold text-primary">Банковская карта</p>
                    <p>Visa, MasterCard, МИР</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Smartphone" className="w-6 h-6 text-gold mt-1" />
                  <div>
                    <p className="font-semibold text-primary">Электронные кошельки</p>
                    <p>PayPal, Яндекс.Деньги, WebMoney</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Banknote" className="w-6 h-6 text-gold mt-1" />
                  <div>
                    <p className="font-semibold text-primary">Наличные</p>
                    <p>При получении заказа</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-8">
              О нас
            </h2>
            <p className="text-xl text-gray-600 font-body mb-8 leading-relaxed">
              ArtCraft — это премиальный магазин товаров для творчества, где каждый продукт создан с особой любовью и вниманием к деталям. Мы верим, что творчество должно приносить радость и вдохновение.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-display font-bold text-gold mb-2">500+</div>
                <p className="text-gray-600 font-body">Довольных клиентов</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-display font-bold text-gold mb-2">3 года</div>
                <p className="text-gray-600 font-body">На рынке</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-display font-bold text-gold mb-2">100%</div>
                <p className="text-gray-600 font-body">Качество</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
              Контакты
            </h2>
            <p className="text-xl text-gray-600 font-body max-w-2xl mx-auto">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" className="w-8 h-8 text-gold-dark" />
              </div>
              <h3 className="font-display font-semibold text-primary mb-2">Телефон</h3>
              <p className="text-gray-600 font-body">+7 (495) 123-45-67</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" className="w-8 h-8 text-gold-dark" />
              </div>
              <h3 className="font-display font-semibold text-primary mb-2">Email</h3>
              <p className="text-gray-600 font-body">info@artcraft.ru</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" className="w-8 h-8 text-gold-dark" />
              </div>
              <h3 className="font-display font-semibold text-primary mb-2">Адрес</h3>
              <p className="text-gray-600 font-body">Москва, ул. Арбат, 15</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" className="w-8 h-8 text-gold-dark" />
              </div>
              <h3 className="font-display font-semibold text-primary mb-2">Время работы</h3>
              <p className="text-gray-600 font-body">Пн-Пт: 10:00-20:00<br />Сб-Вс: 11:00-18:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-gold to-gold-dark rounded-lg flex items-center justify-center">
                  <Icon name="Palette" className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold">ArtCraft</h3>
              </div>
              <p className="text-gray-400 font-body">
                Премиальные товары для творчества и уюта
              </p>
            </div>
            
            <div>
              <h4 className="font-display font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400 font-body">
                <li><a href="#" className="hover:text-gold transition-colors">Свечи</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Стикеры</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Саше</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Новинки</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-display font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400 font-body">
                <li><a href="#delivery" className="hover:text-gold transition-colors">Доставка</a></li>
                <li><a href="#payment" className="hover:text-gold transition-colors">Оплата</a></li>
                <li><a href="#about" className="hover:text-gold transition-colors">О нас</a></li>
                <li><a href="#contacts" className="hover:text-gold transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-display font-semibold mb-4">Подписка</h4>
              <p className="text-gray-400 font-body mb-4">
                Получайте новости о новинках и акциях
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Ваш email"
                  className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-gold"
                />
                <Button className="bg-gold hover:bg-gold-dark text-black rounded-l-none">
                  <Icon name="Send" className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 font-body">
            <p>&copy; 2024 ArtCraft. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}