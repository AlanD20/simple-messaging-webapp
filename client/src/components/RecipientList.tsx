import { useAppSelector } from '@/common/store';

interface Props {
  id: string;
}

const RecipientList = ({ id }: Props) => {
  const { recipients } = useAppSelector((state) => state.user);

  return (
    <datalist id={id} className="bg-gray-800 text-red-600">
      {recipients.map((rec) => (
        <option key={rec.id} value={rec.name} />
      ))}
    </datalist>
  );
};
export default RecipientList;
