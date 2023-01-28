import { FormRegime } from "./FormRegime";

export interface EventFormContextI {
  isOpenForm: boolean;
  setIsOpenForm: React.Dispatch<React.SetStateAction<boolean>>;
  setFormRegime: React.Dispatch<React.SetStateAction<FormRegime>>;
  formRegime: FormRegime;
}