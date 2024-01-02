interface UserData {
    _id: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  

export async function getUserData(): Promise<UserData[]> {
    const res = await fetch(`${process.env.API_URL}/api/register`,{ next: { tags: ['user'] } })

   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   
