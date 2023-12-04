import { loadCards } from "../services/actions/cards";
import { AppDispatch } from "../services/store";
import { config } from "./constants";
  
export const fetchData = async (dispatch: AppDispatch) => {
    try {
      const response = await fetch(`${config.baseUrl}/api`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify({
          query: `
            query {
              cars {
                id
                brand
                model
                color
                model_year
                img_src
                price
                description
                availability
              }
            }
          `,
        }),
      });
  
      const data = await response.json();
      dispatch(loadCards(data.data.cars));
    } catch (error) {
      console.error('Ошибка загрузки', error);
    }
  };
  