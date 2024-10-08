import { Heading } from '@/components/heading';
import { MessageSquare } from 'lucide-react';

const ConversationPage = () => {
  return (
    <div>
      <Heading
        title='Conversation'
        description='Generate text with AI'
        icon={MessageSquare}
        iconColor='text-violet-500'
        bgColor='bg-violet-500/10'
      />
    </div>
  );
};

export default ConversationPage;
