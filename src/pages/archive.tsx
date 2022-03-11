import { NextPage } from "next";

/** Data */
import { getContact, getProjects } from "lib/contentApi";

/** Interface/types */

/** Components */
import Main from "layouts/Main";
import { ArchiveView } from "views";
import { IContact, IProject } from "interfaces/Prismic";

type ArchivePageProps = {
  projects: IProject[];
  contact: IContact;
};

const ArchivePage: NextPage<ArchivePageProps> = ({
  projects,
  contact,
}: ArchivePageProps) => {
  const { socials } = contact;
  return (
    <Main head={<title>Archive</title>} socials={socials}>
      <ArchiveView projects={projects} />
    </Main>
  );
};

export default ArchivePage;

export const getStaticProps = async () => {
  // TODO: Query CMS
  const projects: any[] = await getProjects();

  const contact: any | undefined = await getContact();

  return {
    props: {
      projects: projects.map((proj) => ({ id: proj.id, ...proj.data })),
      contact: contact?.data,
    },
    revalidate: 60,
  };
};
