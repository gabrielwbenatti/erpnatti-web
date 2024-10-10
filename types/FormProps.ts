export interface FormProps<T> {
  initialData: T;
  onChangeData: (data: T) => void;
  onDelete?: () => void;
  onCancel?: () => void;
  onSubmit?: () => void;
}
