interface ServerIdPageProps {
  params: {
    serverId: string;
  }
};

const ServerIdPage = async ({params}: ServerIdPageProps) => {
  return (
    <div>Server id</div>
  )
}

export default ServerIdPage;
