import { usePathname } from "next/navigation"
import { useMemo } from "react";
import { MessageSquare, Users} from "lucide-react"
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export const useNavigation = () => {
  const pathname = usePathname();

  const requestCount = useQuery(api.requests.count)

  const paths = useMemo(()=> [
    {
      name: "Conversations",
      href: "/conversations",
      icon: <MessageSquare />,
      active: pathname.startsWith("/conversations")
    },
    {
      name: "Friends",
      href: "/friends",
      icon: <Users />,
      active: pathname === "/friends",
      count: requestCount
    }
  ], [pathname, requestCount]);

  return paths;
}