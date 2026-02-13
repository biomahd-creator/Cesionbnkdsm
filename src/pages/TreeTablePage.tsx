import { ComponentShowcase } from "../components/ui/component-showcase";
import { TreeTable, TreeNode } from "../components/advanced/TreeTable";
import { toast } from "sonner@2.0.3";

const sampleData: TreeNode[] = [
  {
    id: "client-1",
    name: "Global Corporation S.A.",
    type: "client",
    childCount: 8,
    children: [
      {
        id: "project-1-1",
        name: "Expansion Project 2024",
        type: "project",
        amount: 450000,
        childCount: 3,
        children: [
          { id: "inv-1-1-1", name: "Factura #F-2024-001", type: "invoice", amount: 150000, status: "paid", date: "15/12/2024" },
          { id: "inv-1-1-2", name: "Factura #F-2024-002", type: "invoice", amount: 180000, status: "approved", date: "20/12/2024" },
          { id: "inv-1-1-3", name: "Factura #F-2024-003", type: "invoice", amount: 120000, status: "pending", date: "22/12/2024" },
        ],
      },
      {
        id: "project-1-2",
        name: "IT Modernization",
        type: "project",
        amount: 280000,
        childCount: 2,
        children: [
          { id: "inv-1-2-1", name: "Factura #F-2024-004", type: "invoice", amount: 130000, status: "paid", date: "10/12/2024" },
          { id: "inv-1-2-2", name: "Factura #F-2024-005", type: "invoice", amount: 150000, status: "approved", date: "18/12/2024" },
        ],
      },
    ],
  },
  {
    id: "client-2",
    name: "Innovatech Solutions",
    type: "client",
    childCount: 4,
    children: [
      {
        id: "project-2-1",
        name: "CRM Software Development",
        type: "project",
        amount: 320000,
        childCount: 2,
        children: [
          { id: "inv-2-1-1", name: "Factura #F-2024-009", type: "invoice", amount: 160000, status: "paid", date: "08/12/2024" },
          { id: "inv-2-1-2", name: "Factura #F-2024-010", type: "invoice", amount: 160000, status: "pending", date: "21/12/2024" },
        ],
      },
    ],
  },
];

const compactData: TreeNode[] = [
  {
    id: "client-compact-1",
    name: "SME Example S.A.",
    type: "client",
    childCount: 2,
    children: [
      { id: "inv-compact-1", name: "Factura #F-2024-100", type: "invoice", amount: 45000, status: "pending", date: "23/12/2024" },
      { id: "inv-compact-2", name: "Factura #F-2024-101", type: "invoice", amount: 38000, status: "approved", date: "24/12/2024" },
    ],
  },
];

// Generate large dataset for lazy loading demo
const generateLargeDataset = (): TreeNode[] => {
  const statuses: Array<"pending" | "approved" | "paid" | "rejected"> = ["pending", "approved", "paid", "rejected"];
  const invoices: TreeNode[] = [];
  for (let i = 1; i <= 150; i++) {
    invoices.push({
      id: `inv-large-${i}`,
      name: `Factura #F-2024-${String(i).padStart(4, "0")}`,
      type: "invoice",
      amount: Math.floor(Math.random() * 200000) + 50000,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      date: `${String(Math.floor(Math.random() * 28) + 1).padStart(2, "0")}/12/2024`,
    });
  }
  return [
    {
      id: "client-large",
      name: "MegaCorp International S.A.",
      type: "client",
      childCount: 150,
      children: [
        { id: "project-large", name: "Annual Operations 2024", type: "project", amount: 15000000, childCount: 150, children: invoices },
      ],
    },
  ];
};

const largeDataset = generateLargeDataset();

export function TreeTablePage() {
  return (
    <ComponentShowcase
      title="Tree Table"
      description="Hierarchical table with expandable levels for visualizing Client → Project → Invoice structures. Features expand/collapse with chevron icons, visual indentation, child count badges, type-differentiated icons, status badges, dropdown action menus, optional checkboxes, and lazy loading for large datasets (100+ items)."
      category="Advanced"
      preview={<TreeTable data={sampleData} />}
      code={`import { TreeTable, TreeNode } from "@/components/advanced/TreeTable";

const data: TreeNode[] = [
  {
    id: "client-1",
    name: "Global Corporation S.A.",
    type: "client",
    childCount: 2,
    children: [
      {
        id: "project-1",
        name: "Expansion Project",
        type: "project",
        amount: 450000,
        children: [
          {
            id: "invoice-1",
            name: "Invoice #F-001",
            type: "invoice",
            amount: 150000,
            status: "paid",
            date: "15/12/2024",
          },
        ],
      },
    ],
  },
];

<TreeTable data={data} />`}
      props={[
        {
          name: "data",
          type: "TreeNode[]",
          description: "Array of hierarchical tree nodes to display.",
          required: true,
        },
        {
          name: "showCheckboxes",
          type: "boolean",
          default: "false",
          description: "Enable multi-select checkboxes for each row.",
        },
        {
          name: "onRowClick",
          type: "(node: TreeNode) => void",
          description: "Callback when a row is clicked.",
        },
        {
          name: "itemsPerPage",
          type: "number",
          default: "10",
          description: "Number of child items to show per page (for lazy loading).",
        },
        {
          name: "enableLazyLoad",
          type: "boolean",
          default: "false",
          description: 'Enable lazy loading with "Load more" button for large datasets.',
        },
      ]}
      examples={[
        {
          title: "With Checkboxes",
          description: "Multi-select mode with checkboxes for batch operations.",
          preview: <TreeTable data={compactData} showCheckboxes />,
          code: `<TreeTable data={data} showCheckboxes />`,
        },
        {
          title: "With Row Click Handler",
          description: "Click rows to execute custom actions.",
          preview: (
            <TreeTable
              data={compactData}
              onRowClick={(node) => {
                toast.info(`Clicked: ${node.name} (${node.type})`);
              }}
            />
          ),
          code: `<TreeTable
  data={data}
  onRowClick={(node) => console.log("Clicked:", node)}
/>`,
        },
        {
          title: "Lazy Loading (150 invoices)",
          description: "Large dataset with incremental loading — shows 10 items at a time with 'Load more' and 'Show all' buttons.",
          preview: (
            <TreeTable
              data={largeDataset}
              itemsPerPage={10}
              enableLazyLoad={true}
            />
          ),
          code: `<TreeTable
  data={largeDataset}
  itemsPerPage={10}
  enableLazyLoad={true}
/>`,
        },
      ]}
    />
  );
}