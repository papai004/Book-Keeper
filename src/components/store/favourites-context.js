import { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext(null);

export const useFavouriteContext = () => {
    const context = useContext(FavoritesContext);

    if(context === undefined){
        throw new Error('Favouritecontext must be within favouriteContextProvider');
    }
    return context;
}


const FavoritesContextProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([]);

    const addToFavourites = (book) => {
        const oldFavourites = [...favourites];
        const newFavourites = oldFavourites.concat(book);
        setFavourites(newFavourites);
    };

    const removeFromFavourites = (id) => {
        const oldFavourites = [...favourites];
        const newFavourites = oldFavourites.filter((book) => book.id !== id);
        setFavourites(newFavourites);
    };


    return (
        <FavoritesContext.Provider
        value={{favourites, addToFavourites, removeFromFavourites}}
        >
        {children}
        </FavoritesContext.Provider>
    );
};
export default FavoritesContextProvider;