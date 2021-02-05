import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import RemoveIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ICard from "models/Card";
import React, { ReactElement } from "react";
import noImage from "resources/default-image.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

interface ICardItem {
  card: ICard;
  onEditClick: (card: ICard) => void;
  onRemoveClick: (id: number) => void;
}

const CardItem: React.FC<ICardItem> = ({ card, onEditClick, onRemoveClick }: ICardItem): ReactElement => {
  const classes = useStyles();

  const handleOnEditItemClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    onEditClick(card);
  };

  const handleOnRemoveItemClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    onRemoveClick(card.id);
  };

  return (
    <Card data-testid="card-container" className={classes.root}>
      <CardMedia component="img" alt="Card image" height="140" image={card.imageUrl || noImage} title="Image" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {card.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {card.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton id="bt-edit" aria-label="Edit" onClick={handleOnEditItemClick}>
          <EditIcon />
        </IconButton>
        <IconButton id="bt-remove" aria-label="Remove" onClick={handleOnRemoveItemClick}>
          <RemoveIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CardItem;
