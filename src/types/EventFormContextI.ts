export interface EventFormContextI {
  isOpenForm: boolean;
  setIsOpenForm: React.Dispatch<React.SetStateAction<boolean>>;
  closeForm: () => void;
}