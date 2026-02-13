import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "../ui/table";
import { 
  Plus,
  User,
  FileEdit,
  Trash2,
  Eye,
  AlertCircle,
  CheckCircle,
  XCircle
} from "lucide-react";
import { MasterDataGrid } from "../advanced/MasterDataGrid";

/**
 * 🔒 BUSINESS PATTERN - Audit Log Viewer
 * 
 * Component for viewing system audit logs.
 * Includes filters, search, event types, and timestamps.
 * 
 * Location: /components/patterns/AuditLogViewer.tsx
 * Category: Data Management - High Priority
 * Usage: User action tracking, compliance, debugging
 * 
 * Note: Moved from /components/widgets/ to resolve the layer violation
 * (widget → pattern). As it composes MasterDataGrid, this component
 * belongs correctly in the patterns layer.
 */

export interface AuditLogEntry {
  id: string;
  timestamp: string;
  user: string;
  action: string;
  resource: string;
  status: "success" | "warning" | "error";
  ipAddress: string;
  details?: string;
}

interface AuditLogViewerProps {
  logs?: AuditLogEntry[];
  onExport?: () => void;
  onFilterChange?: (filter: string) => void;
}

const mockLogs: AuditLogEntry[] = [
  {
    id: "1",
    timestamp: "2025-01-13 14:30:22",
    user: "juan.perez@empresa.com",
    action: "Login",
    resource: "Authentication",
    status: "success",
    ipAddress: "192.168.1.100",
    details: "Successful login from Chrome browser"
  },
  {
    id: "2",
    timestamp: "2025-01-13 14:28:15",
    user: "maria.gomez@empresa.com",
    action: "Update",
    resource: "User Profile",
    status: "success",
    ipAddress: "192.168.1.105",
    details: "Updated phone number"
  },
  {
    id: "3",
    timestamp: "2025-01-13 14:25:33",
    user: "admin@empresa.com",
    action: "Delete",
    resource: "Document #8547",
    status: "warning",
    ipAddress: "192.168.1.1",
    details: "Document deleted without approval"
  },
  {
    id: "4",
    timestamp: "2025-01-13 14:20:11",
    user: "carlos.ruiz@empresa.com",
    action: "Create",
    resource: "Invoice #9821",
    status: "success",
    ipAddress: "192.168.1.110",
    details: "New invoice created for client XYZ"
  },
  {
    id: "5",
    timestamp: "2025-01-13 14:15:44",
    user: "ana.lopez@empresa.com",
    action: "Login",
    resource: "Authentication",
    status: "error",
    ipAddress: "192.168.1.120",
    details: "Failed login - Invalid credentials"
  },
  {
    id: "6",
    timestamp: "2025-01-13 14:10:27",
    user: "pedro.sanchez@empresa.com",
    action: "View",
    resource: "Financial Report Q4",
    status: "success",
    ipAddress: "192.168.1.115",
    details: "Accessed quarterly financial report"
  },
  {
    id: "7",
    timestamp: "2025-01-13 14:05:18",
    user: "admin@empresa.com",
    action: "Update",
    resource: "System Settings",
    status: "success",
    ipAddress: "192.168.1.1",
    details: "Changed email notification settings"
  },
  {
    id: "8",
    timestamp: "2025-01-13 14:00:09",
    user: "laura.martinez@empresa.com",
    action: "Export",
    resource: "Customer Database",
    status: "warning",
    ipAddress: "192.168.1.125",
    details: "Exported 5,000 customer records"
  },
];

export function AuditLogViewer({ 
  logs = mockLogs,
  onExport,
  onFilterChange
}: AuditLogViewerProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "success":
        return <Badge variant="success-soft-outline">Success</Badge>;
      case "warning":
        return <Badge variant="warning-soft-outline">Warning</Badge>;
      case "error":
        return <Badge variant="destructive-soft-outline">Error</Badge>;
      default:
        return <Badge variant="info-soft-outline">{status}</Badge>;
    }
  };

  const getActionIcon = (action: string) => {
    switch (action.toLowerCase()) {
      case "create":
        return <Plus className="h-4 w-4 text-blue-500" />;
      case "update":
        return <FileEdit className="h-4 w-4 text-orange-500" />;
      case "delete":
        return <Trash2 className="h-4 w-4 text-red-500" />;
      case "view":
        return <Eye className="h-4 w-4 text-muted-foreground" />;
      case "login":
        return <User className="h-4 w-4 text-green-500" />;
      default:
        return <FileEdit className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const filteredLogs = logs.filter(log => {
    const matchesSearch = 
      log.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.resource.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = filterStatus === "all" || log.status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

  // Pagination
  const totalPages = Math.ceil(filteredLogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedLogs = filteredLogs.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="space-y-4">
      {/* Stats Summary */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="bg-green-50 border-green-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Success</p>
                <p className="font-bold">{logs.filter(l => l.status === "success").length}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-yellow-50 border-yellow-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Warnings</p>
                <p className="font-bold">{logs.filter(l => l.status === "warning").length}</p>
              </div>
              <AlertCircle className="h-8 w-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-red-50 border-red-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Errors</p>
                <p className="font-bold">{logs.filter(l => l.status === "error").length}</p>
              </div>
              <XCircle className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <MasterDataGrid
        title="Audit Log Viewer"
        description="Action tracking and audit system"
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        searchPlaceholder="Search logs..."
        
        filterOptions={[
          {
            label: "Status",
            value: filterStatus,
            options: [
              { label: "All statuses", value: "all" },
              { label: "Success", value: "success" },
              { label: "Warning", value: "warning" },
              { label: "Error", value: "error" },
            ]
          }
        ]}
        onFilterChange={(_, val) => {
          setFilterStatus(val);
          onFilterChange?.(val);
        }}
        onResetFilters={filterStatus !== "all" ? () => setFilterStatus("all") : undefined}
        
        showExport={true}
        onExport={onExport}
        showRefresh={true}
        showViewOptions={false}
        
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        totalItems={filteredLogs.length}
        itemsPerPage={itemsPerPage}
        startIndex={startIndex}
      >
        <div className="border-t">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold">Timestamp</TableHead>
                <TableHead className="font-semibold">User</TableHead>
                <TableHead className="font-semibold">Action</TableHead>
                <TableHead className="font-semibold">Resource</TableHead>
                <TableHead className="font-semibold">Status</TableHead>
                <TableHead className="font-semibold">IP Address</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedLogs.map((log, index) => (
                <TableRow 
                  key={log.id}
                  className={index % 2 === 0 ? "bg-muted/50" : ""}
                >
                  <TableCell className="font-medium text-sm">
                    {log.timestamp}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{log.user}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getActionIcon(log.action)}
                      <span className="font-medium text-sm">{log.action}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm">{log.resource}</TableCell>
                  <TableCell>
                    {getStatusBadge(log.status)}
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {log.ipAddress}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </MasterDataGrid>
    </div>
  );
}