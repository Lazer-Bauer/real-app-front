import { useEffect } from "react";
import cardsService from "../services/cardService";
import { useNavigate, useParams } from "react-router-dom";

const CardDelete = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const deleteCard = async () => {
      try {
        await cardsService.deleteCard(id);
      } catch (e) {
        console.log("Error ocourd");
      } finally {
        navigate("/my-cards");
      }
    };
    deleteCard();
  }, [id, navigate]);

  return null;
};

export default CardDelete;
