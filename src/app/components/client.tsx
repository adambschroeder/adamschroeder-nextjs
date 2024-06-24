import { Client as ClientType } from "@/src/data/experiences";

interface ClientProps {
  client: ClientType;
  lastItem: boolean;
}

export default function Client({ client, lastItem }: ClientProps) {
  return (
    <li className={!lastItem ? "mb-3" : ""}>
      <p>
        [{client.name}] {client.description}
      </p>
    </li>
  );
}
