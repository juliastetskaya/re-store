export default class BookstoreService {
  data = [
    {
      id: 1,
      title: 'The 7 Habits of Highly Effective People',
      author: 'Stephen R. Covey',
      price: 25,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51ePAUjnwmL._SX332_BO1,204,203,200_.jpg',
    },
    {
      id: 2,
      title: 'Steve Jobs',
      author: 'Walter Isaacson',
      price: 32,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41EQKL0jMhL._SX325_BO1,204,203,200_.jpg',
    },
  ];

  getBooks() {
    return new Promise((resolve, reject) => setTimeout(() => {
      if (Math.random() > 0.5) {
        reject(new Error());
      } else {
        resolve(this.data);
      }
    }, 700));
  }
}
