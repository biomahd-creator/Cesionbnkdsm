import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Checkbox } from "../ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  ChevronRight,
  ChevronDown,
  MoreVertical,
  Building2,
  FolderOpen,
  FileText,
  Eye,
  Edit,
  Trash2,
  Download,
  ChevronsDown,
  Loader2,
} from "lucide-react";
import { MasterDataGrid } from "./MasterDataGrid";

export interface TreeNode {
  id: string;
  name: string;
  type: "client" | "project" | "invoice";
  amount?: number;
  status?: "pending" | "approved" | "paid" | "rejected";
  date?: string;
  children?: TreeNode[];
  childCount?: number;
}

interface TreeTableProps {
  data: TreeNode[];
  showCheckboxes?: boolean;
  onRowClick?: (node: TreeNode) => void;
  itemsPerPage?: number; // Items per node limit
  enableLazyLoad?: boolean; // Enable lazy loading
  title?: string;
  description?: string;
}

const statusConfig = {
  pending: { label: "Pending", variant: "secondary" as const },
  approved: { label: "Approved", variant: "default" as const },
  paid: { label: "Paid", variant: "outline" as const },
  rejected: { label: "Rejected", variant: "destructive" as const },
};

const typeIcons = {
  client: Building2,
  project: FolderOpen,
  invoice: FileText,
};

export function TreeTable({ 
  data, 
  showCheckboxes = false, 
  onRowClick,
  itemsPerPage = 10,
  enableLazyLoad = true,
  title,
  description
}: TreeTableProps) {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());
  const [selectedNodes, setSelectedNodes] = useState<Set<string>>(new Set());
  const [visibleChildren, setVisibleChildren] = useState<Record<string, number>>({});
  const [loadingNodes, setLoadingNodes] = useState<Set<string>>(new Set());

  const toggleNode = (nodeId: string) => {
    const newExpanded = new Set(expandedNodes);
    if (newExpanded.has(nodeId)) {
      newExpanded.delete(nodeId);
    } else {
      newExpanded.add(nodeId);
      // Initialize visible children counter
      if (!visibleChildren[nodeId]) {
        setVisibleChildren(prev => ({
          ...prev,
          [nodeId]: itemsPerPage
        }));
      }
    }
    setExpandedNodes(newExpanded);
  };

  const toggleSelection = (nodeId: string) => {
    const newSelected = new Set(selectedNodes);
    if (newSelected.has(nodeId)) {
      newSelected.delete(nodeId);
    } else {
      newSelected.add(nodeId);
    }
    setSelectedNodes(newSelected);
  };

  const loadMoreChildren = (nodeId: string, currentVisible: number) => {
    // Simulate async loading
    setLoadingNodes(prev => new Set(prev).add(nodeId));
    
    setTimeout(() => {
      setVisibleChildren(prev => ({
        ...prev,
        [nodeId]: currentVisible + itemsPerPage
      }));
      setLoadingNodes(prev => {
        const newSet = new Set(prev);
        newSet.delete(nodeId);
        return newSet;
      });
    }, 500);
  };

  const showAllChildren = (nodeId: string, totalChildren: number) => {
    setVisibleChildren(prev => ({
      ...prev,
      [nodeId]: totalChildren
    }));
  };

  const renderRow = (node: TreeNode, level: number = 0): JSX.Element[] => {
    const isExpanded = expandedNodes.has(node.id);
    const isSelected = selectedNodes.has(node.id);
    const hasChildren = node.children && node.children.length > 0;
    const Icon = typeIcons[node.type];
    const paddingLeft = level * 24;
    const totalChildren = node.children?.length || 0;
    const currentVisible = visibleChildren[node.id] || itemsPerPage;
    const isLoading = loadingNodes.has(node.id);

    const rows: JSX.Element[] = [
      <TableRow
        key={node.id}
        className="hover:bg-muted/50 cursor-pointer transition-colors"
        onClick={() => onRowClick?.(node)}
      >
        {/* Dynamic padding based on tree depth */}
        <TableCell className={`font-medium pl-[${12 + paddingLeft}px]`}>
          <div className="flex items-center gap-2">
            {hasChildren ? (
              <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0 hover:bg-primary/10"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleNode(node.id);
                }}
              >
                {isExpanded ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </Button>
            ) : (
              <div className="w-6" />
            )}
            {showCheckboxes && (
              <Checkbox
                checked={isSelected}
                onCheckedChange={() => toggleSelection(node.id)}
                onClick={(e) => e.stopPropagation()}
              />
            )}
            <Icon className="h-4 w-4 text-muted-foreground shrink-0" />
            <span className="truncate">{node.name}</span>
            {hasChildren && (
              <Badge variant="secondary" className="ml-2 h-5 px-1.5 text-xs">
                {node.childCount || totalChildren}
              </Badge>
            )}
          </div>
        </TableCell>

        <TableCell>
          <Badge variant="outline" className="capitalize">
            {node.type === "client" && "Client"}
            {node.type === "project" && "Project"}
            {node.type === "invoice" && "Invoice"}
          </Badge>
        </TableCell>

        <TableCell>
          {node.amount ? (
            <span className="font-medium">
              ${node.amount.toLocaleString("en-US")}
            </span>
          ) : (
            <span className="text-muted-foreground">—</span>
          )}
        </TableCell>

        <TableCell>
          {node.status ? (
            <Badge variant={statusConfig[node.status].variant}>
              {statusConfig[node.status].label}
            </Badge>
          ) : (
            <span className="text-muted-foreground">—</span>
          )}
        </TableCell>

        <TableCell className="text-muted-foreground">
          {node.date || "—"}
        </TableCell>

        <TableCell className="text-right">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={(e) => e.stopPropagation()}
              >
                <MoreVertical className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Eye className="mr-2 h-4 w-4" />
                View Details
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Edit className="mr-2 h-4 w-4" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Download className="mr-2 h-4 w-4" />
                Download
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive focus:text-destructive">
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </TableCell>
      </TableRow>,
    ];

    // Render children if expanded
    if (isExpanded && hasChildren) {
      const childrenToShow = enableLazyLoad 
        ? node.children!.slice(0, currentVisible)
        : node.children!;

      childrenToShow.forEach((child) => {
        rows.push(...renderRow(child, level + 1));
      });

      // Show "Load More" button if there are more children
      if (enableLazyLoad && currentVisible < totalChildren) {
        const remainingCount = totalChildren - currentVisible;
        const loadMorePaddingLeft = (level + 1) * 24 + 12;

        rows.push(
          <TableRow key={`${node.id}-load-more`} className="bg-muted/30">
            {/* Dynamic padding for load-more button */}
            <TableCell 
              colSpan={6} 
              className={`py-3 pl-[${loadMorePaddingLeft}px]`}
            >
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8"
                  onClick={(e) => {
                    e.stopPropagation();
                    loadMoreChildren(node.id, currentVisible);
                  }}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Loading...
                    </>
                  ) : (
                    <>
                      <ChevronsDown className="mr-2 h-4 w-4" />
                      Load more ({itemsPerPage})
                    </>
                  )}
                </Button>
                
                <span className="text-xs text-muted-foreground">
                  Showing {currentVisible} of {totalChildren} • {remainingCount} remaining
                </span>

                {remainingCount > itemsPerPage && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 text-xs"
                    onClick={(e) => {
                      e.stopPropagation();
                      showAllChildren(node.id, totalChildren);
                    }}
                  >
                    Show all ({totalChildren})
                  </Button>
                )}
              </div>
            </TableCell>
          </TableRow>
        );
      }
    }

    return rows;
  };

  const renderAllRows = () => {
    const allRows: JSX.Element[] = [];
    data.forEach((node) => {
      allRows.push(...renderRow(node));
    });
    return allRows;
  };

  return (
    <MasterDataGrid
      title={title}
      description={description}
      totalItems={0} // Disable standard pagination
      showExport={false}
      showRefresh={false}
      showViewOptions={false}
    >
      <div className="overflow-x-auto border-t">
        <div className="inline-block min-w-full align-middle">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[40%]">Name</TableHead>
                <TableHead className="w-[15%]">Type</TableHead>
                <TableHead className="w-[15%]">Amount</TableHead>
                <TableHead className="w-[15%]">Status</TableHead>
                <TableHead className="w-[10%]">Date</TableHead>
                <TableHead className="w-[5%] text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.length > 0 ? (
                renderAllRows()
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="h-24 text-center">
                    No data available
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Mobile scroll indicator */}
      <div className="p-2 text-xs text-muted-foreground text-center md:hidden border-t bg-muted/20">
        📱 Swipe horizontally to see more columns
      </div>
    </MasterDataGrid>
  );
}