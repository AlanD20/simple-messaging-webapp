import TitleText from '@comp/TitleText';
import PageLayout from '@comp/PageLayout';
import SetUser from '@comp/dashboard/SetUser';
import { useAppSelector } from '@/common/store';
import UserForm from '@comp/dashboard/UserForm';
import AlertStatus from '@comp/dashboard/AlertStatus';

const Dashboard = () => {
  const user = useAppSelector((state) => state.user);
  const condition = user.name && user.name.length >= 3;

  return (
    <PageLayout>
      <TitleText text="Message App!" className="flex-col gap-4">
        <span className="order-2 text-xl mt-4">
          {condition ? `Hello, ${user.name}` : ''}
        </span>
      </TitleText>

      {condition ? <UserForm /> : <SetUser />}
      <AlertStatus />
    </PageLayout>
  );
};

export default Dashboard;
