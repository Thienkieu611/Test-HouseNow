import React, { useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index: React.FC = () => {
  /* Answer 6 */
  const [activeTab, setActiveTab] = useState<'all' | 'pending' | 'completed'>(
    'all'
  )

  const getTabClass = (tabValue: string) => {
    return tabValue === activeTab
      ? 'bg-gray-700 text-white'
      : 'bg-white text-gray-700'
  }
  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>

        <div className="pt-10">
          <Tabs.Root
            defaultValue="all"
            onValueChange={(value) =>
              setActiveTab(value as 'all' | 'pending' | 'completed')
            }
          >
            <Tabs.List className="flex space-x-2">
              <Tabs.Trigger
                value="all"
                className={`rounded-full border border-gray-200 px-6 py-3 text-sm font-bold ${getTabClass(
                  'all'
                )}`}
              >
                All
              </Tabs.Trigger>
              <Tabs.Trigger
                value="pending"
                className={`rounded-full border border-gray-200 px-6 py-3 text-sm font-bold ${getTabClass(
                  'pending'
                )}`}
              >
                Pending
              </Tabs.Trigger>
              <Tabs.Trigger
                value="completed"
                className={`rounded-full border border-gray-200 px-6 py-3 text-sm font-bold ${getTabClass(
                  'complete'
                )}`}
              >
                Completed
              </Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content className="pt-10" value="all">
              <TodoList filter="all" />
            </Tabs.Content>
            <Tabs.Content className="pt-10" value="pending">
              <TodoList filter="pending" />
            </Tabs.Content>
            <Tabs.Content className="pt-10" value="completed">
              <TodoList filter="completed" />
            </Tabs.Content>
          </Tabs.Root>
        </div>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
