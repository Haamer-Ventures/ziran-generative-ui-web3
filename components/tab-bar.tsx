import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import easy from "../public/easy.json";
import carrot from "../public/carrot.json";
import dragon from "../public/dragon.json";

const shopping = [
  {
    heading:
      "How are shopping, saving, and investing related to sustainability?",
    message:
      "How are shopping, saving, and investing related to sustainability?",
  },
  {
    heading: "Where can I repair my clothes in Tainan?",
    message: "Where can I repair my clothes in Tainan?",
  },
  {
    heading: "Is my current lifestyle sustainable?",
    message: "Is my current lifestyle sustainable?",
  },
  {
    heading: "What are the living conditions of the animals I eat in Taiwan?",
    message: "What are the living conditions of the animals I eat in Taiwan?",
  },
  {
    heading: "Where did my Nike sneakers come from?",
    message: "Where did my Nike sneakers come from?",
  },
  {
    heading: "What are Adidas sneakers made of?",
    message: "What are Adidas sneakers made of?",
  },
  {
    heading: "What are digital product passports?",
    message: "What are digital product passports?",
  },
  {
    heading: "How to check a product's sustainability?",
    message: "How to check a product's sustainability?",
  },
];

const saving = [
  {
    heading: "買東西先查看產品的運輸距離（是不是當地食品）",
    message: "買東西先查看產品的運輸距離（是不是當地食品）",
  },
  {
    heading: "How can I increase my savings?",
    message: "How can I increase my savings?",
  },
  {
    heading: "買東西先查看公司生產過程多環保",
    message: "買東西先查看公司工人的員工福利多好",
  },
  {
    heading: "買東西先了解哪些產品污染最嚴重，以便避免它們",
    message: "買東西先了解哪些產品污染最嚴重，以便避免它們",
  },
  {
    heading: "買東西先了解我吃的動物性食品，動物的生活環境",
    message: "買東西先了解我吃的動物性食品，動物的生活環境",
  },
  {
    heading: "買東西先尋找有機產品",
    message: "買東西先尋找有機產品",
  },
  {
    heading: "投資前查看AI摘要的消費者對公司環保的評論",
    message: "投資前查看AI摘要的消費者對公司環保的評論",
  },
  {
    heading: "投資前查看公司的環保認證和生態評分",
    message: "投資前查看公司的環保認證和生態評分",
  },
];

const investing = [
  {
    heading: "What are some sustainable stocks?",
    message: "What are some sustainable stocks?",
  },
  {
    heading: "Are stocks or cryptocurrencies more sustainable?",
    message: "Are stocks or cryptocurrencies more sustainable?",
  },
  {
    heading: "How sustainable is Coca Cola?",
    message: "How sustainable is Coca Cola?",
  },
  {
    heading: "How to read a candle chart?",
    message: "How to read a candle chart?",
  },
  {
    heading: "如果我買環保的品牌成為永續投資者嗎？",
    message: "如果我買環保的品牌成為永續投資者嗎？",
  },
];

export default function TabBar({
  submitMessage,
}: {
  submitMessage: (message: string) => void;
}) {
  return (
    <div>
      <Tabs defaultValue="one">
        <TabsList>
          <TabsTrigger value="one">
            <div className="p-1 font-bold text-2xl text-center">
              <Lottie
                animationData={carrot}
                loop={true}
                className="tinySvg"
                role="img"
              />
              存錢
            </div>
          </TabsTrigger>
          <TabsTrigger value="two">
            <div className="p-1 font-bold text-2xl text-center">
              <Lottie
                animationData={easy}
                loop={true}
                className="tinySvg"
                role="img"
              />
              買東西
            </div>
          </TabsTrigger>
          <TabsTrigger value="three">
            <div className="p-1 font-bold text-2xl text-center">
              <Lottie
                animationData={dragon}
                loop={true}
                className="tinySvg"
                role="img"
              />
              投資錢
            </div>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="one">
          <div className="flex flex-wrap gap-2 p-4 mb-4">

            <h2 className="text-md font-medium">Chat about savings</h2>
            {shopping.map((msg, index) => (
              <Button
                key={index}
                variant="ghost"
                className="h-auto p-1 text-base shadow-sm border border-slate-100 grow md:grow-0 text-center"
                onClick={async () => {
                  submitMessage(msg.message);
                }}
              >
                {msg.heading}
              </Button>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="two">
          <div className="flex flex-wrap gap-2 p-4 mb-4">
            {saving.map((msg, index) => (
              <Button
                key={index}
                variant="ghost"
                className="h-auto p-1 text-base shadow-sm border border-slate-100 grow md:grow-0 text-center"
                onClick={async () => {
                  submitMessage(msg.message);
                }}
              >
                {msg.heading}
              </Button>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="three">
          <div className="flex flex-wrap gap-2 p-4 mb-4">
            {investing.map((msg, index) => (
              <Button
                key={index}
                variant="ghost"
                className="h-auto p-1 text-base shadow-sm border border-slate-100 grow md:grow-0 text-center"
                onClick={async () => {
                  submitMessage(msg.message);
                }}
              >
                {msg.heading}
              </Button>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
