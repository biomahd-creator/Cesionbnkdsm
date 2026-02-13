import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowLeft, Eye, Download, MoreVertical, FileText, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "../ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";

interface ReportData {
  id: string;
  archivo: string;
  fecha: string;
  tamano: string;
}

interface ReportsConsultationProps {
  onBack?: () => void;
}

export function ReportsConsultation({ onBack }: ReportsConsultationProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Mock data
  const mockReports: ReportData[] = [
    { id: "1", archivo: "Reporte_002.xlsx", fecha: "2025/01/02", tamano: "2.345 Kb" },
    { id: "2", archivo: "Reporte_010.xlsx", fecha: "2025/01/10", tamano: "2.345 Kb" },
    { id: "3", archivo: "Reporte_006.xlsx", fecha: "2025/01/06", tamano: "2.345 Kb" },
    { id: "4", archivo: "Reporte_014.xlsx", fecha: "2025/01/14", tamano: "2.345 Kb" },
    { id: "5", archivo: "Reporte_004.xlsx", fecha: "2025/01/04", tamano: "2.345 Kb" },
    { id: "6", archivo: "Reporte_012.xlsx", fecha: "2025/01/12", tamano: "2.345 Kb" },
    { id: "7", archivo: "Reporte_008.xlsx", fecha: "2025/01/08", tamano: "2.345 Kb" },
    { id: "8", archivo: "Reporte_016.xlsx", fecha: "2025/01/16", tamano: "2.345 Kb" },
    { id: "9", archivo: "Reporte_003.xlsx", fecha: "2025/01/03", tamano: "2.345 Kb" },
    { id: "10", archivo: "Reporte_011.xlsx", fecha: "2025/01/11", tamano: "2.345 Kb" },
    { id: "11", archivo: "Reporte_007.xlsx", fecha: "2025/01/07", tamano: "2.345 Kb" },
    { id: "12", archivo: "Reporte_015.xlsx", fecha: "2025/01/15", tamano: "2.345 Kb" },
    { id: "13", archivo: "Reporte_005.xlsx", fecha: "2025/01/05", tamano: "2.345 Kb" },
    { id: "14", archivo: "Reporte_013.xlsx", fecha: "2025/01/13", tamano: "2.345 Kb" },
    { id: "15", archivo: "Reporte_009.xlsx", fecha: "2025/01/09", tamano: "2.345 Kb" },
  ];

  const filteredReports = mockReports.filter((report) =>
    report.archivo.toLowerCase().includes(searchQuery.toLowerCase()) ||
    report.fecha.includes(searchQuery)
  );

  const handleView = (report: ReportData) => {
    console.log("View report:", report.archivo);
    // Implement view logic
  };

  const handleDownload = (report: ReportData) => {
    console.log("Download report:", report.archivo);
    // Implement download logic
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredReports.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredReports.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="space-y-4">
      {/* Header with back button */}
      <div className="flex items-center gap-4">
        {onBack && (
          <Button
            variant="outline"
            size="sm"
            onClick={onBack}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
        )}
        <div className="flex-1">
          <h1 className="text-3xl font-semibold tracking-tight">
            Re-endorsed Operations
          </h1>
          <p className="text-muted-foreground">
            Endorsement Reports to Funders
          </p>
        </div>
      </div>

      {/* Card with table */}
      <Card className="elevation-2 border-none shadow-md">
        <CardHeader className="pb-3">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                File
              </CardTitle>
              <CardDescription className="mt-1">
                {filteredReports.length} record{filteredReports.length !== 1 ? 's' : ''}
              </CardDescription>
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <div className="relative w-full md:w-72">
                <Input
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-9"
                />
              </div>
              <Button 
                onClick={() => console.log("Generate Report")}
                className="gap-2 shrink-0"
              >
                <FileText className="h-4 w-4" />
                Generate Report
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold text-sm w-[50px]">
                    #
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">File</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">Date</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">File Size</th>
                  <th className="text-center py-3 px-4 font-semibold text-sm">Options</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="text-center py-8">
                      <div className="flex flex-col items-center gap-2 text-muted-foreground">
                        <FileText className="h-8 w-8" />
                        <p>No reports found</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  currentItems.map((report, index) => (
                    <tr 
                      key={report.id}
                      className="border-b hover:bg-muted/50 transition-colors"
                    >
                      <td className="py-3 px-4 text-muted-foreground text-sm">
                        {indexOfFirstItem + index + 1}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2 font-medium text-sm">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          {report.archivo}
                        </div>
                      </td>
                      <td className="py-3 px-4 text-sm">{report.fecha}</td>
                      <td className="py-3 px-4">
                        <Badge variant="secondary" className="font-satoshi text-xs">
                          {report.tamano}
                        </Badge>
                      </td>
                      <td className="text-center py-3 px-4">
                        <div className="flex items-center justify-center gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleView(report)}
                          >
                            <Eye className="h-4 w-4" />
                            <span className="sr-only">View report</span>
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreVertical className="h-4 w-4" />
                                <span className="sr-only">More options</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem onClick={() => handleView(report)}>
                                <Eye className="mr-2 h-4 w-4" />
                                View
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleDownload(report)}>
                                <Download className="mr-2 h-4 w-4" />
                                Download
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
        <CardContent className="pt-4 pb-4 border-t">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2">
              <p className="text-sm text-muted-foreground">Show</p>
              <Select
                value={itemsPerPage.toString()}
                onValueChange={(value: string) => {
                  setItemsPerPage(Number(value));
                  setCurrentPage(1);
                }}
              >
                <SelectTrigger className="h-9 w-[70px]">
                  <SelectValue>{itemsPerPage}</SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">records per page</p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <p className="text-sm text-muted-foreground">
                Page {currentPage} of {totalPages || 1}
              </p>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages || totalPages === 0}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}