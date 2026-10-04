import { Button, Input } from '@/app/components';
import EditUserProfileForm from '@/app/components/user/EditUserProfileForm';
import { getProfile } from '@/server-actions/user/getProfile';

export default async function EditAccountPage() {

    const userProfile = await getProfile()
  return (
    <>
    <p className="mt-2 text-muted-foreground">
        Edit your profile.
    </p>
      <EditUserProfileForm userProfile={userProfile} />
    </>
  )
}
