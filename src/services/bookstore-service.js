export default class BookstoreService {
  data = [
    {
      id: 1,
      title: 'Structure and Interpretation of Computer Programs',
      author: 'Harold Abelson',
      price: 103,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41H43ADrEGL.jpg',
    },
    {
      id: 2,
      title: 'Steve Jobs',
      author: 'Walter Isaacson',
      price: 32,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41EQKL0jMhL._SX325_BO1,204,203,200_.jpg',
    },
    {
      id: 3,
      title: 'Extreme Programming',
      author: 'Ward Cunningham',
      price: 52,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51w9bK86OVL._SX302_BO1,204,203,200_.jpg',
    },
    {
      id: 4,
      title: 'Clean Code',
      author: 'Robert C. Martin',
      price: 15,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/515iEcDr1GL._SX385_BO1,204,203,200_.jpg',
    },
    {
      id: 5,
      title: 'The 7 Habits of Highly Effective People',
      author: 'Stephen R. Covey',
      price: 25,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51ePAUjnwmL._SX332_BO1,204,203,200_.jpg',
    },
  ];

  getBooks() {
    return new Promise((resolve) => setTimeout(() => resolve(this.data), 700));
  }
}
