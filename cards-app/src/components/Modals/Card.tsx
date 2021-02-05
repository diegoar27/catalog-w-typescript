import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import TextField from "components/shared/TextField";
import ICard from "models/Card";
import IErrorField from "models/ErrorField";
import React, { useEffect, useState } from "react";

export interface ICardModal {
  open: boolean;
  card?: ICard;
  onSubmitModal: (card: ICard) => void;
  onCloseModal: () => void;
}

const CardModal: React.FC<ICardModal> = ({ open, card, onSubmitModal, onCloseModal }: ICardModal) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const newCard = { id: 0, title: "", description: "", imageUrl: "" };
  const [item, setItem] = useState<ICard>(card || newCard);
  const [errorFields, setErrorFields] = useState<IErrorField[]>([]);

  useEffect(() => {
    setErrorFields([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const handleOnInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItem({ ...item, [event.target.name]: event.target.value });
  };

  const handleOnAddClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const errorFields = validateForm();
    setErrorFields(errorFields);

    if (errorFields.every((i) => !i.hasError)) onSubmitModal(item);
  };

  const handleOnCloseClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onCloseModal();
  };

  const validateForm = (): IErrorField[] => {
    return [
      { fieldName: "title", hasError: !!!item.title },
      { fieldName: "description", hasError: !!!item.description },
    ];
  };

  return (
    <>
      <Dialog open={open} onClose={handleOnCloseClick} aria-labelledby="form-dialog-title" fullScreen={fullScreen}>
        <DialogTitle id="form-dialog-title">New Card</DialogTitle>
        <DialogContent>
          <TextField
            required
            id="title"
            name="title"
            label="Title"
            value={item.title}
            errorFields={errorFields}
            onValueChange={handleOnInputChange}
          />
          <TextField
            required
            id="description"
            name="description"
            label="Description"
            value={item.description}
            errorFields={errorFields}
            onValueChange={handleOnInputChange}
          />
          <TextField
            id="imageUrl"
            name="imageUrl"
            label="ImageUrl"
            value={item.imageUrl}
            errorFields={errorFields}
            onValueChange={handleOnInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={(e) => handleOnCloseClick(e)} color="primary">
            Cancel
          </Button>
          <Button onClick={(e) => handleOnAddClick(e)} color="primary">
            {item.id ? "Update" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CardModal;
