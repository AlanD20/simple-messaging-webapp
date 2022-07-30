import { UserMessage } from '@/features/userSlice';
import ContainerLayout from '@comp/ContainerLayout';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const Message = ({ from, title, body, createdAt }: UserMessage) => {
  return (
    <ContainerLayout className="w-full flex-col bg-gray-100 py-2 px-4 rounded-lg">
      <ContainerLayout className="w-full justify-between">
        <ContainerLayout>
          <span className="text-sm">From:</span>
          <span className="capitalize">{from}</span>
        </ContainerLayout>
        <ContainerLayout>
          <span className="text-black/50 italic">
            {formatDistanceToNow(new Date(createdAt))}
          </span>
        </ContainerLayout>
      </ContainerLayout>

      <ContainerLayout className="w-full flex-col !items-start gap-0">
        <span className="text-sm">Title:</span>
        <span className="font-bold capitalize ml-4">{title}</span>
      </ContainerLayout>
      <ContainerLayout className="w-full flex-col !items-start gap-0">
        <span className="text-sm">Message:</span>
        <span className="ml-4">{body}</span>
      </ContainerLayout>
    </ContainerLayout>
  );
};
export default Message;
