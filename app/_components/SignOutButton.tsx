import { signOutAction } from '@/app/_lib/actions';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button type="submit" className="hover:bg-primary-900 hover:text-primary-100 text-primary-200 flex w-full items-center gap-4 px-5 py-3 font-semibold transition-colors">
        <ExitToAppOutlinedIcon sx={{ fill: '#FA4A0C' }} />
        <span>Sign out</span>
      </button>
    </form>
  );
}

export default SignOutButton;
