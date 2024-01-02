'use client'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar} from "@nextui-org/react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const ProfileLogo = () => {
    const router = useRouter()
  return (
    <Dropdown>
      <DropdownTrigger>
      <Avatar
            as="button"
            className="transition-transform"
            src={"/testImage.png"}
          />
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Action event example" 
        onAction={(key) => {
            if(key === 'profile'){
                router.push('/dashboard')
            }else{
                signOut({ callbackUrl: "/" })
            }
        }}
      >
        <DropdownItem key="profile">Profile</DropdownItem>
        <DropdownItem key="signout">Sign Out</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default ProfileLogo