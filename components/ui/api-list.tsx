"use client"

import { useOrigin } from "@/hooks/use-origin";
import { useParams } from "next/navigation";
import { ApiAlert } from "./api-alert";

interface ApiListProps {
  enityName: string;
  entityIdName: string;
}

export const ApiList: React.FC<ApiListProps> = ({enityName, entityIdName}) => {
  const params = useParams()
  const origin = useOrigin()

  const baseUrl = `${origin}/api/${params.storeId}`
  return (
    <>
    <ApiAlert title="GET" variant="public" description={`${baseUrl}/${enityName}`} />
    <ApiAlert title="GET" variant="public" description={`${baseUrl}/${enityName}/{${entityIdName}}`} />
    <ApiAlert title="POST" variant="admin" description={`${baseUrl}/${enityName}`} />
    <ApiAlert title="PATCH" variant="admin" description={`${baseUrl}/${enityName}/{${entityIdName}}`} />
    <ApiAlert title="DELETE" variant="admin" description={`${baseUrl}/${enityName}/{${entityIdName}}`} />
    </>
  )
}
