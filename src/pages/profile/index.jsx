import Navbar from "@/components/Navbar";
import Placeholder from "@/components/Placeholder";

export default function ProfilePage() {
    return (
      <div>
        <Navbar />
        <Placeholder title="Profile" desc="Ini adalah Halaman Profile" button="Logout" />
      </div>
    );
  }