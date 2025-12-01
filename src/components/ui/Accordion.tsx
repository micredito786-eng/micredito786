'use client';

import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState, type ReactNode } from 'react';

interface AccordionProps {
  items: {
    id: string;
    question: string;
    answer: ReactNode;
  }[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className={cn('space-y-4', className)}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          question={item.question}
          answer={item.answer}
          isOpen={openId === item.id}
          onToggle={() => setOpenId(openId === item.id ? null : item.id)}
        />
      ))}
    </div>
  );
}

interface AccordionItemProps {
  question: string;
  answer: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <motion.div
      className={cn(
        'rounded-2xl border overflow-hidden transition-colors duration-300',
        isOpen ? 'border-primary/30 bg-primary/5' : 'border-gray-200 bg-white'
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="text-lg font-semibold text-foreground pr-4">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-6 h-6 text-primary" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-6 text-foreground-muted leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
