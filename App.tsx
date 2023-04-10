import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import { NavigationContainer } from "@react-navigation/native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import RootNavigator from "./navigator/RootNavigator";

// Initialize Apollo Client
const client = new ApolloClient({
  uri: "https://dashboard.stepzen.com/explorer?endpoint=api%2Fhoping-gorilla",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    // @ts-ignore - TailwindProvider is missing a type definition
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </TailwindProvider>
  );
}
