import { createContext, useEffect, useState } from 'react';
import './App.scss';
import BurgerMenu from './components/BurgerMenu';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { Post } from './types/Posts';
import posts from './api/posts.json';
import ArrowUp from './components/ArrowUp';

type EscapeContextType = {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  selectCategory: string;
  setSelectCategory: (val: string) => void;
  filteringPosts: Post[];
  isLoading: boolean;
};

export const EscapeContext = createContext<EscapeContextType | null>(null);

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [postsFromApi, setPostsFromApi] = useState<Post[]>([]);
  const [selectCategory, setSelectCategory] = useState('nature');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setPostsFromApi(posts.filter((post) => post.category === selectCategory));
      setIsLoading(false);
    }, 1000);
  }, [selectCategory]);

  const filteringPosts = postsFromApi.filter(
    (post) => post.category === selectCategory
  );

  return (
    <EscapeContext.Provider
      value={{
        isOpen,
        setIsOpen,
        selectCategory,
        setSelectCategory,
        filteringPosts,
        isLoading,
      }}
    >
      <div className="app">
        {!isOpen && <ArrowUp />}
        <BurgerMenu />
        <Header />
        <Main />
        <Footer />
      </div>
    </EscapeContext.Provider>
  );
}

export default App;
