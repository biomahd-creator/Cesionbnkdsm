import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { useState, useMemo } from "react";
import React from "react";
import { ComponentShowcase } from "../components/ui/component-showcase";

// Import only icons guaranteed to exist in lucide-react ^0.344.0
import {
  // Arrows & Navigation
  ArrowLeft, ArrowRight, ArrowUp, ArrowDown, ArrowUpRight, ArrowDownLeft, ArrowUpLeft, ArrowDownRight,
  ArrowBigLeft, ArrowBigRight, ArrowBigUp, ArrowBigDown,
  ChevronLeft, ChevronRight, ChevronUp, ChevronDown, ChevronsLeft, ChevronsRight, ChevronsUp, ChevronsDown,
  ChevronsUpDown, ChevronsLeftRight,
  MoveHorizontal, MoveVertical, Move, MoveDiagonal, MoveDiagonal2,
  Compass, Navigation, Navigation2, Map, MapPin, MapPinOff, MapPinned, Route, Milestone, Signpost, Waypoints,
  CornerDownLeft, CornerDownRight, CornerUpLeft, CornerUpRight,
  CornerLeftDown, CornerLeftUp, CornerRightDown, CornerRightUp,

  // Actions & Editing
  Plus, PlusCircle, PlusSquare, Minus, MinusCircle, MinusSquare,
  X, XCircle, XSquare, XOctagon,
  Check, CheckCircle as CheckCircleAction, CheckCircle2 as CheckCircle2Action, CheckSquare,
  Copy, CopyCheck, CopyPlus, CopyMinus, CopyX,
  Scissors, Edit, Edit2, Edit3, Pencil, PencilLine, Pen, PenTool,
  Save, SaveAll, Download, Upload, Share, Share2, Send, SendHorizonal,
  RefreshCw, RefreshCcw, RotateCw, RotateCcw, Rotate3d,
  Trash, Trash2, Delete,
  ZoomIn, ZoomOut, Maximize, Maximize2, Minimize, Minimize2, Expand, Shrink,
  Undo, Undo2, Redo, Redo2, Repeat, Repeat1, Shuffle,
  Search, SearchCheck, SearchX, SearchCode,
  Filter, FilterX, Settings, Settings2, Sliders, SlidersHorizontal,
  ScanLine, ScanEye, Scan,

  // UI & Layout
  Layout, LayoutDashboard, LayoutGrid, LayoutList, LayoutTemplate, LayoutPanelLeft, LayoutPanelTop,
  Sidebar, SidebarOpen, SidebarClose, Menu, MenuSquare,
  MoreHorizontal, MoreVertical,
  Grid, Grid2x2, Grid3x3, List, ListChecks, ListTodo, ListX, ListPlus, ListMinus,
  Columns, Rows, PanelLeft, PanelRight, PanelTop, PanelBottom,
  PanelLeftClose, PanelLeftOpen, PanelRightClose, PanelRightOpen,
  AlignLeft, AlignCenter, AlignRight, AlignJustify,
  AlignHorizontalDistributeCenter, AlignVerticalDistributeCenter,
  AlignStartVertical, AlignEndVertical, AlignStartHorizontal, AlignEndHorizontal,
  Table, Table2, Grip, GripVertical, GripHorizontal,
  Fullscreen, AppWindow,
  Square, SquareStack, Circle, Triangle, RectangleHorizontal, RectangleVertical,
  Frame, Boxes, Box, BoxSelect,

  // Communication & Social
  Mail, MailCheck, MailOpen, MailPlus, MailQuestion, MailX,
  Inbox, Send as SendIcon, Mails,
  MessageCircle, MessageCircleMore, MessageSquare, MessageSquareMore, MessageSquarePlus,
  MessagesSquare, Reply, ReplyAll, Forward,
  Phone, PhoneCall, PhoneIncoming, PhoneOutgoing, PhoneMissed, PhoneForwarded, PhoneOff,
  Video, VideoOff, Mic, MicOff,
  Volume, Volume1, Volume2, VolumeX,
  Bell, BellOff, BellRing, BellPlus, BellMinus, BellDot,
  AtSign, Hash, Smile, SmilePlus, Frown, Laugh, Meh, ThumbsUp, ThumbsDown,
  Heart, HeartHandshake, HeartCrack, HeartOff,

  // Media & Files
  File, FileText, FileType, FileType2, FilePlus, FileMinus, FileEdit,
  FileCheck, FileCheck2, FileX, FileX2, FileWarning, FileQuestion,
  FileArchive, FileAudio, FileVideo, FileImage,
  FileCode, FileCode2, FileJson, FileClock, FileHeart,
  Files, FilePlus2, FileMinus2, FileInput, FileOutput,
  Folder, FolderOpen, FolderPlus, FolderMinus, FolderCheck, FolderX,
  FolderArchive, FolderClock, FolderEdit, FolderHeart, FolderInput, FolderOutput,
  FolderRoot, FolderSearch, FolderTree, Folders,
  Image, ImagePlus, ImageMinus, Images, ImageOff,
  Camera, CameraOff,
  Video as VideoIcon, Film, Music, Music2, Music3, Music4, Headphones, Radio,
  Play, PlayCircle, PlaySquare, Pause, PauseCircle,
  StopCircle, SkipBack, SkipForward, FastForward, Rewind,
  Disc, Disc2, Disc3,

  // Status & Alerts
  CheckCircle, CheckCircle2,
  AlertCircle, AlertTriangle, AlertOctagon,
  Info, HelpCircle,
  Ban, ShieldAlert, ShieldCheck, ShieldClose, ShieldX, ShieldQuestion, ShieldOff,
  Lock, Unlock, LockKeyhole,
  Eye, EyeOff,
  Verified, BadgeCheck, BadgeAlert, BadgeX, BadgeInfo, BadgePlus, BadgeMinus,
  Star, StarHalf, StarOff,
  Flag, FlagOff, FlagTriangleLeft, FlagTriangleRight,
  Award, Trophy, Medal,
  Bookmark, BookmarkCheck, BookmarkMinus, BookmarkPlus, BookmarkX,
  Timer, TimerOff, TimerReset,
  Power, PowerOff, ToggleLeft, ToggleRight,

  // User & People
  User, User2, Users, Users2, UserPlus, UserMinus, UserCheck, UserX,
  Contact, Contact2, UserCircle, UserCircle2, UserSquare, UserSquare2,
  UserCog, UserRound, UserRoundPlus, UserRoundMinus, UserRoundCheck, UserRoundX, UserRoundCog,

  // Commerce & Shopping
  ShoppingCart, ShoppingBag, Store, CreditCard,
  DollarSign, Euro, PoundSterling, Coins, Banknote,
  Wallet, Wallet2, WalletCards,
  Tag, Tags, Ticket, TicketCheck, TicketMinus, TicketPlus, TicketX,
  Receipt, ReceiptText,
  BadgeDollarSign, BadgeEuro, BadgePoundSterling,
  Percent, PercentCircle, PercentSquare,

  // Time & Calendar
  Calendar, CalendarDays, CalendarCheck, CalendarCheck2, CalendarClock, CalendarHeart,
  CalendarPlus, CalendarMinus, CalendarX, CalendarX2, CalendarRange,
  Clock, Clock1, Clock2, Clock3, Clock4, Clock5, Clock6, Clock7, Clock8, Clock9, Clock10, Clock11, Clock12,
  Timer as TimerIcon, Hourglass, Watch, AlarmClock, AlarmClockCheck, AlarmClockOff,

  // Weather & Nature
  Sun, SunMedium, SunMoon, Sunrise, Sunset, SunDim, SunSnow,
  Moon, MoonStar, CloudMoon, CloudMoonRain, CloudSun, CloudSunRain,
  Cloud, CloudRain, CloudSnow, CloudDrizzle, CloudFog, CloudHail, CloudLightning,
  CloudRainWind, Cloudy, Wind, Snowflake, Tornado,
  Umbrella, UmbrellaOff, Zap, ZapOff,
  Leaf, TreeDeciduous, TreePine,
  Flower, Flower2, Sprout, Waves, Droplet, Droplets,

  // Technology & Development
  Code, Code2, Terminal, TerminalSquare,
  Bug, BugOff, BugPlay,
  Database, DatabaseBackup, DatabaseZap,
  Server, ServerCog, ServerCrash, ServerOff,
  CloudCog, CloudOff,
  Wifi, WifiOff,
  Bluetooth, BluetoothConnected, BluetoothOff, BluetoothSearching,
  Usb, Nfc, Cast,
  HardDrive, HardDriveDownload, HardDriveUpload,
  Cpu, MemoryStick, BatteryCharging, BatteryFull, BatteryLow, BatteryMedium, BatteryWarning,
  Plug, Plug2, PlugZap, PlugZap2, Cable, Unplug,
  Monitor, MonitorCheck, MonitorDown, MonitorOff, MonitorPlay, MonitorSmartphone, MonitorSpeaker,
  Keyboard, Mouse, MousePointer, MousePointer2, MousePointerClick,
  Printer,
  Smartphone, SmartphoneCharging, SmartphoneNfc,
  Tablet, TabletSmartphone,
  Laptop, Laptop2,
  Tv, Tv2,
  Gamepad2, Gamepad, Joystick,
  Signal, SignalHigh, SignalLow, SignalMedium, SignalZero, Rss,

  // Transport & Travel
  Car, CarFront,
  Bike, Bus, BusFront,
  Train, TrainFront, TrainTrack,
  Plane, PlaneLanding, PlaneTakeoff,
  Ship, Sailboat,
  Rocket, Satellite, SatelliteDish,
  Truck, TramFront,
  Anchor, Fuel,
  ParkingCircle,

  // Home & Building
  Home,
  Building, Building2, Hotel, School, Church, Landmark,
  Factory, Warehouse, Store as StoreBuilding,
  DoorOpen, DoorClosed,
  Bed, BedDouble, BedSingle,
  Sofa, Armchair,
  Lamp, LampDesk, LampFloor,
  Lightbulb, LightbulbOff,
  Key, KeyRound, KeySquare,

  // Food & Dining
  Coffee, UtensilsCrossed, Utensils,
  Pizza, Croissant, Sandwich, Salad, Soup,
  Apple, Cherry, Grape, Banana, CakeSlice, Cookie, Candy,
  Fish, FishOff,
  Egg, EggOff,
  Milk,
  Wine, WineOff, Beer, GlassWater,

  // Health & Medical
  Heart as HeartIcon, Activity,
  Pill, Syringe,
  Thermometer, ThermometerSnowflake, ThermometerSun,
  Stethoscope,
  Brain,
  Dna,
  Glasses, Microscope, PersonStanding,

  // Sports & Games
  Trophy as TrophyIcon, Medal as MedalIcon,
  Target, Crosshair, Focus,
  Dices, Dice1, Dice2, Dice3, Dice4, Dice5, Dice6,
  Gamepad as GamepadSport,
  Dumbbell,
  Sparkles, Sparkle, Flame, Award as AwardSport,
  Gem, Crown, Shirt,

  // Charts & Data
  BarChart, BarChart2, BarChart3, BarChart4, BarChartBig, BarChartHorizontal, BarChartHorizontalBig,
  LineChart, PieChart,
  TrendingUp, TrendingDown,
  Activity as ActivityIcon, AreaChart, Binary,

  // Settings & Tools
  Settings as SettingsIcon, Settings2 as Settings2Icon,
  Wrench, Hammer, Gauge,
  Ruler, Paintbrush, Paintbrush2, PaintBucket,
  Palette, Pipette, Eraser,
  Sliders as SlidersIcon, Filter as FilterIcon,
  Cog, Construction, GitBranch, GitCommit, GitMerge, GitPullRequest,

  // Shapes & Design
  Square as SquareIcon, SquareDot,
  Circle as CircleIcon, CircleDot, CircleDashed,
  Triangle as TriangleIcon,
  Hexagon, Octagon,
  Diamond,
  Star as StarIcon, Heart as HeartShape,
  Pentagon, Shapes,

  // Text & Typography
  Type, ALargeSmall, AArrowDown, AArrowUp,
  Bold, Italic, Underline,
  AlignLeft as AlignLeftIcon, AlignCenter as AlignCenterIcon,
  AlignRight as AlignRightIcon, AlignJustify as AlignJustifyIcon,
  List as ListIcon, ListOrdered, ListChecks as ListChecksIcon,
  Indent, Outdent,
  Heading, Heading1, Heading2, Heading3, Heading4, Heading5, Heading6,
  Pilcrow, Quote,
  CaseSensitive, CaseLower, CaseUpper,
  Strikethrough, Subscript, Superscript,
  Baseline, WrapText, RemoveFormatting,
  SpellCheck, SpellCheck2, Languages,
  WholeWord,

  // Additional Popular Icons
  Globe, Globe2,
  Link, Link2, ExternalLink, Unlink, Unlink2,
  Briefcase,
  Package, Package2, PackageCheck, PackageMinus, PackageOpen, PackagePlus, PackageSearch, PackageX,
  Box as BoxIcon, Archive, ArchiveRestore, ArchiveX,
  Bookmark as BookmarkIcon,
  BookOpen, BookOpenCheck, Book, BookCopy, BookMarked, BookText, BookType,
  Library, Notebook,
  FileCode as FileCodeIcon,
  Github, Gitlab, Linkedin, Twitter, Facebook, Instagram, Youtube, Chrome, Slack, Figma, Trello,
  Anchor as AnchorIcon, Aperture, Atom,
  Bell as BellIcon, Blocks,
  Repeat as RepeatIcon, Component, Layers,
  Wand, Wand2, Workflow, Zap as ZapIcon
} from "lucide-react";

/**
 * IconGalleryPage
 *
 * Curated gallery of 400+ most popular lucide-react icons organized by categories.
 * Includes real-time search, usage examples, and best practices.
 *
 * @component
 */

type IconComponent = React.ComponentType<{ className?: string; strokeWidth?: string | number; fill?: string }>;

interface IconEntry {
  name: string;
  Icon: IconComponent;
  importName: string;
}

/**
 * Complete icon catalog organized by category
 */
const ICON_CATALOG: Record<string, IconEntry[]> = {
  arrows: [
    { name: "arrow-left", Icon: ArrowLeft, importName: "ArrowLeft" },
    { name: "arrow-right", Icon: ArrowRight, importName: "ArrowRight" },
    { name: "arrow-up", Icon: ArrowUp, importName: "ArrowUp" },
    { name: "arrow-down", Icon: ArrowDown, importName: "ArrowDown" },
    { name: "arrow-up-right", Icon: ArrowUpRight, importName: "ArrowUpRight" },
    { name: "arrow-down-left", Icon: ArrowDownLeft, importName: "ArrowDownLeft" },
    { name: "arrow-up-left", Icon: ArrowUpLeft, importName: "ArrowUpLeft" },
    { name: "arrow-down-right", Icon: ArrowDownRight, importName: "ArrowDownRight" },
    { name: "chevron-left", Icon: ChevronLeft, importName: "ChevronLeft" },
    { name: "chevron-right", Icon: ChevronRight, importName: "ChevronRight" },
    { name: "chevron-up", Icon: ChevronUp, importName: "ChevronUp" },
    { name: "chevron-down", Icon: ChevronDown, importName: "ChevronDown" },
    { name: "chevrons-left", Icon: ChevronsLeft, importName: "ChevronsLeft" },
    { name: "chevrons-right", Icon: ChevronsRight, importName: "ChevronsRight" },
    { name: "chevrons-up", Icon: ChevronsUp, importName: "ChevronsUp" },
    { name: "chevrons-down", Icon: ChevronsDown, importName: "ChevronsDown" },
    { name: "chevrons-up-down", Icon: ChevronsUpDown, importName: "ChevronsUpDown" },
    { name: "move-horizontal", Icon: MoveHorizontal, importName: "MoveHorizontal" },
    { name: "move-vertical", Icon: MoveVertical, importName: "MoveVertical" },
    { name: "move", Icon: Move, importName: "Move" },
    { name: "compass", Icon: Compass, importName: "Compass" },
    { name: "navigation", Icon: Navigation, importName: "Navigation" },
    { name: "map", Icon: Map, importName: "Map" },
    { name: "map-pin", Icon: MapPin, importName: "MapPin" },
    { name: "route", Icon: Route, importName: "Route" },
    { name: "milestone", Icon: Milestone, importName: "Milestone" },
    { name: "corner-down-left", Icon: CornerDownLeft, importName: "CornerDownLeft" },
    { name: "corner-down-right", Icon: CornerDownRight, importName: "CornerDownRight" },
    { name: "corner-up-left", Icon: CornerUpLeft, importName: "CornerUpLeft" },
    { name: "corner-up-right", Icon: CornerUpRight, importName: "CornerUpRight" },
  ],
  actions: [
    { name: "plus", Icon: Plus, importName: "Plus" },
    { name: "plus-circle", Icon: PlusCircle, importName: "PlusCircle" },
    { name: "minus", Icon: Minus, importName: "Minus" },
    { name: "minus-circle", Icon: MinusCircle, importName: "MinusCircle" },
    { name: "x", Icon: X, importName: "X" },
    { name: "x-circle", Icon: XCircle, importName: "XCircle" },
    { name: "check", Icon: Check, importName: "Check" },
    { name: "check-square", Icon: CheckSquare, importName: "CheckSquare" },
    { name: "copy", Icon: Copy, importName: "Copy" },
    { name: "copy-check", Icon: CopyCheck, importName: "CopyCheck" },
    { name: "scissors", Icon: Scissors, importName: "Scissors" },
    { name: "edit", Icon: Edit, importName: "Edit" },
    { name: "edit-2", Icon: Edit2, importName: "Edit2" },
    { name: "edit-3", Icon: Edit3, importName: "Edit3" },
    { name: "pencil", Icon: Pencil, importName: "Pencil" },
    { name: "pencil-line", Icon: PencilLine, importName: "PencilLine" },
    { name: "pen", Icon: Pen, importName: "Pen" },
    { name: "pen-tool", Icon: PenTool, importName: "PenTool" },
    { name: "save", Icon: Save, importName: "Save" },
    { name: "download", Icon: Download, importName: "Download" },
    { name: "upload", Icon: Upload, importName: "Upload" },
    { name: "share", Icon: Share, importName: "Share" },
    { name: "share-2", Icon: Share2, importName: "Share2" },
    { name: "send", Icon: Send, importName: "Send" },
    { name: "refresh-cw", Icon: RefreshCw, importName: "RefreshCw" },
    { name: "refresh-ccw", Icon: RefreshCcw, importName: "RefreshCcw" },
    { name: "rotate-cw", Icon: RotateCw, importName: "RotateCw" },
    { name: "rotate-ccw", Icon: RotateCcw, importName: "RotateCcw" },
    { name: "trash", Icon: Trash, importName: "Trash" },
    { name: "trash-2", Icon: Trash2, importName: "Trash2" },
    { name: "delete", Icon: Delete, importName: "Delete" },
    { name: "zoom-in", Icon: ZoomIn, importName: "ZoomIn" },
    { name: "zoom-out", Icon: ZoomOut, importName: "ZoomOut" },
    { name: "maximize", Icon: Maximize, importName: "Maximize" },
    { name: "minimize", Icon: Minimize, importName: "Minimize" },
    { name: "expand", Icon: Expand, importName: "Expand" },
    { name: "shrink", Icon: Shrink, importName: "Shrink" },
    { name: "undo", Icon: Undo, importName: "Undo" },
    { name: "redo", Icon: Redo, importName: "Redo" },
    { name: "repeat", Icon: Repeat, importName: "Repeat" },
    { name: "shuffle", Icon: Shuffle, importName: "Shuffle" },
    { name: "search", Icon: Search, importName: "Search" },
    { name: "filter", Icon: Filter, importName: "Filter" },
    { name: "settings", Icon: Settings, importName: "Settings" },
    { name: "sliders", Icon: Sliders, importName: "Sliders" },
    { name: "sliders-horizontal", Icon: SlidersHorizontal, importName: "SlidersHorizontal" },
  ],
  layout: [
    { name: "layout", Icon: Layout, importName: "Layout" },
    { name: "layout-dashboard", Icon: LayoutDashboard, importName: "LayoutDashboard" },
    { name: "layout-grid", Icon: LayoutGrid, importName: "LayoutGrid" },
    { name: "layout-list", Icon: LayoutList, importName: "LayoutList" },
    { name: "layout-template", Icon: LayoutTemplate, importName: "LayoutTemplate" },
    { name: "sidebar", Icon: Sidebar, importName: "Sidebar" },
    { name: "menu", Icon: Menu, importName: "Menu" },
    { name: "more-horizontal", Icon: MoreHorizontal, importName: "MoreHorizontal" },
    { name: "more-vertical", Icon: MoreVertical, importName: "MoreVertical" },
    { name: "grid", Icon: Grid, importName: "Grid" },
    { name: "grid-2x2", Icon: Grid2x2, importName: "Grid2x2" },
    { name: "grid-3x3", Icon: Grid3x3, importName: "Grid3x3" },
    { name: "list", Icon: List, importName: "List" },
    { name: "list-checks", Icon: ListChecks, importName: "ListChecks" },
    { name: "columns", Icon: Columns, importName: "Columns" },
    { name: "rows", Icon: Rows, importName: "Rows" },
    { name: "panel-left", Icon: PanelLeft, importName: "PanelLeft" },
    { name: "panel-right", Icon: PanelRight, importName: "PanelRight" },
    { name: "panel-top", Icon: PanelTop, importName: "PanelTop" },
    { name: "panel-bottom", Icon: PanelBottom, importName: "PanelBottom" },
    { name: "align-left", Icon: AlignLeft, importName: "AlignLeft" },
    { name: "align-center", Icon: AlignCenter, importName: "AlignCenter" },
    { name: "align-right", Icon: AlignRight, importName: "AlignRight" },
    { name: "align-justify", Icon: AlignJustify, importName: "AlignJustify" },
    { name: "table", Icon: Table, importName: "Table" },
    { name: "grip", Icon: Grip, importName: "Grip" },
    { name: "grip-vertical", Icon: GripVertical, importName: "GripVertical" },
    { name: "grip-horizontal", Icon: GripHorizontal, importName: "GripHorizontal" },
    { name: "fullscreen", Icon: Fullscreen, importName: "Fullscreen" },
    { name: "app-window", Icon: AppWindow, importName: "AppWindow" },
    { name: "square", Icon: Square, importName: "Square" },
    { name: "circle", Icon: Circle, importName: "Circle" },
    { name: "triangle", Icon: Triangle, importName: "Triangle" },
    { name: "frame", Icon: Frame, importName: "Frame" },
    { name: "box", Icon: Box, importName: "Box" },
    { name: "boxes", Icon: Boxes, importName: "Boxes" },
  ],
  communication: [
    { name: "mail", Icon: Mail, importName: "Mail" },
    { name: "mail-check", Icon: MailCheck, importName: "MailCheck" },
    { name: "mail-open", Icon: MailOpen, importName: "MailOpen" },
    { name: "mail-plus", Icon: MailPlus, importName: "MailPlus" },
    { name: "mail-x", Icon: MailX, importName: "MailX" },
    { name: "inbox", Icon: Inbox, importName: "Inbox" },
    { name: "mails", Icon: Mails, importName: "Mails" },
    { name: "message-circle", Icon: MessageCircle, importName: "MessageCircle" },
    { name: "message-square", Icon: MessageSquare, importName: "MessageSquare" },
    { name: "messages-square", Icon: MessagesSquare, importName: "MessagesSquare" },
    { name: "reply", Icon: Reply, importName: "Reply" },
    { name: "reply-all", Icon: ReplyAll, importName: "ReplyAll" },
    { name: "forward", Icon: Forward, importName: "Forward" },
    { name: "phone", Icon: Phone, importName: "Phone" },
    { name: "phone-call", Icon: PhoneCall, importName: "PhoneCall" },
    { name: "phone-incoming", Icon: PhoneIncoming, importName: "PhoneIncoming" },
    { name: "phone-outgoing", Icon: PhoneOutgoing, importName: "PhoneOutgoing" },
    { name: "phone-missed", Icon: PhoneMissed, importName: "PhoneMissed" },
    { name: "phone-off", Icon: PhoneOff, importName: "PhoneOff" },
    { name: "video", Icon: Video, importName: "Video" },
    { name: "video-off", Icon: VideoOff, importName: "VideoOff" },
    { name: "mic", Icon: Mic, importName: "Mic" },
    { name: "mic-off", Icon: MicOff, importName: "MicOff" },
    { name: "volume", Icon: Volume, importName: "Volume" },
    { name: "volume-2", Icon: Volume2, importName: "Volume2" },
    { name: "volume-x", Icon: VolumeX, importName: "VolumeX" },
    { name: "bell", Icon: Bell, importName: "Bell" },
    { name: "bell-off", Icon: BellOff, importName: "BellOff" },
    { name: "bell-ring", Icon: BellRing, importName: "BellRing" },
    { name: "at-sign", Icon: AtSign, importName: "AtSign" },
    { name: "hash", Icon: Hash, importName: "Hash" },
    { name: "smile", Icon: Smile, importName: "Smile" },
    { name: "frown", Icon: Frown, importName: "Frown" },
    { name: "meh", Icon: Meh, importName: "Meh" },
    { name: "thumbs-up", Icon: ThumbsUp, importName: "ThumbsUp" },
    { name: "thumbs-down", Icon: ThumbsDown, importName: "ThumbsDown" },
    { name: "heart", Icon: Heart, importName: "Heart" },
    { name: "heart-handshake", Icon: HeartHandshake, importName: "HeartHandshake" },
  ],
  media: [
    { name: "file", Icon: File, importName: "File" },
    { name: "file-text", Icon: FileText, importName: "FileText" },
    { name: "file-plus", Icon: FilePlus, importName: "FilePlus" },
    { name: "file-minus", Icon: FileMinus, importName: "FileMinus" },
    { name: "file-edit", Icon: FileEdit, importName: "FileEdit" },
    { name: "file-check", Icon: FileCheck, importName: "FileCheck" },
    { name: "file-x", Icon: FileX, importName: "FileX" },
    { name: "file-warning", Icon: FileWarning, importName: "FileWarning" },
    { name: "file-code", Icon: FileCode, importName: "FileCode" },
    { name: "file-json", Icon: FileJson, importName: "FileJson" },
    { name: "files", Icon: Files, importName: "Files" },
    { name: "folder", Icon: Folder, importName: "Folder" },
    { name: "folder-open", Icon: FolderOpen, importName: "FolderOpen" },
    { name: "folder-plus", Icon: FolderPlus, importName: "FolderPlus" },
    { name: "folder-minus", Icon: FolderMinus, importName: "FolderMinus" },
    { name: "folder-check", Icon: FolderCheck, importName: "FolderCheck" },
    { name: "folder-x", Icon: FolderX, importName: "FolderX" },
    { name: "folder-tree", Icon: FolderTree, importName: "FolderTree" },
    { name: "image", Icon: Image, importName: "Image" },
    { name: "image-plus", Icon: ImagePlus, importName: "ImagePlus" },
    { name: "camera", Icon: Camera, importName: "Camera" },
    { name: "film", Icon: Film, importName: "Film" },
    { name: "music", Icon: Music, importName: "Music" },
    { name: "headphones", Icon: Headphones, importName: "Headphones" },
    { name: "radio", Icon: Radio, importName: "Radio" },
    { name: "play", Icon: Play, importName: "Play" },
    { name: "play-circle", Icon: PlayCircle, importName: "PlayCircle" },
    { name: "pause", Icon: Pause, importName: "Pause" },
    { name: "stop-circle", Icon: StopCircle, importName: "StopCircle" },
    { name: "skip-back", Icon: SkipBack, importName: "SkipBack" },
    { name: "skip-forward", Icon: SkipForward, importName: "SkipForward" },
    { name: "fast-forward", Icon: FastForward, importName: "FastForward" },
    { name: "rewind", Icon: Rewind, importName: "Rewind" },
    { name: "disc", Icon: Disc, importName: "Disc" },
  ],
  status: [
    { name: "check-circle", Icon: CheckCircle, importName: "CheckCircle" },
    { name: "check-circle-2", Icon: CheckCircle2, importName: "CheckCircle2" },
    { name: "alert-circle", Icon: AlertCircle, importName: "AlertCircle" },
    { name: "alert-triangle", Icon: AlertTriangle, importName: "AlertTriangle" },
    { name: "alert-octagon", Icon: AlertOctagon, importName: "AlertOctagon" },
    { name: "info", Icon: Info, importName: "Info" },
    { name: "help-circle", Icon: HelpCircle, importName: "HelpCircle" },
    { name: "ban", Icon: Ban, importName: "Ban" },
    { name: "shield-alert", Icon: ShieldAlert, importName: "ShieldAlert" },
    { name: "shield-check", Icon: ShieldCheck, importName: "ShieldCheck" },
    { name: "shield-x", Icon: ShieldX, importName: "ShieldX" },
    { name: "lock", Icon: Lock, importName: "Lock" },
    { name: "unlock", Icon: Unlock, importName: "Unlock" },
    { name: "lock-keyhole", Icon: LockKeyhole, importName: "LockKeyhole" },
    { name: "eye", Icon: Eye, importName: "Eye" },
    { name: "eye-off", Icon: EyeOff, importName: "EyeOff" },
    { name: "verified", Icon: Verified, importName: "Verified" },
    { name: "badge-check", Icon: BadgeCheck, importName: "BadgeCheck" },
    { name: "star", Icon: Star, importName: "Star" },
    { name: "star-half", Icon: StarHalf, importName: "StarHalf" },
    { name: "flag", Icon: Flag, importName: "Flag" },
    { name: "award", Icon: Award, importName: "Award" },
    { name: "trophy", Icon: Trophy, importName: "Trophy" },
    { name: "medal", Icon: Medal, importName: "Medal" },
    { name: "bookmark", Icon: Bookmark, importName: "Bookmark" },
    { name: "timer", Icon: Timer, importName: "Timer" },
    { name: "power", Icon: Power, importName: "Power" },
    { name: "power-off", Icon: PowerOff, importName: "PowerOff" },
    { name: "toggle-left", Icon: ToggleLeft, importName: "ToggleLeft" },
    { name: "toggle-right", Icon: ToggleRight, importName: "ToggleRight" },
  ],
  user: [
    { name: "user", Icon: User, importName: "User" },
    { name: "user-2", Icon: User2, importName: "User2" },
    { name: "users", Icon: Users, importName: "Users" },
    { name: "users-2", Icon: Users2, importName: "Users2" },
    { name: "user-plus", Icon: UserPlus, importName: "UserPlus" },
    { name: "user-minus", Icon: UserMinus, importName: "UserMinus" },
    { name: "user-check", Icon: UserCheck, importName: "UserCheck" },
    { name: "user-x", Icon: UserX, importName: "UserX" },
    { name: "user-cog", Icon: UserCog, importName: "UserCog" },
    { name: "contact", Icon: Contact, importName: "Contact" },
    { name: "contact-2", Icon: Contact2, importName: "Contact2" },
    { name: "user-circle", Icon: UserCircle, importName: "UserCircle" },
    { name: "user-circle-2", Icon: UserCircle2, importName: "UserCircle2" },
    { name: "user-square", Icon: UserSquare, importName: "UserSquare" },
    { name: "user-round", Icon: UserRound, importName: "UserRound" },
  ],
  commerce: [
    { name: "shopping-cart", Icon: ShoppingCart, importName: "ShoppingCart" },
    { name: "shopping-bag", Icon: ShoppingBag, importName: "ShoppingBag" },
    { name: "store", Icon: Store, importName: "Store" },
    { name: "credit-card", Icon: CreditCard, importName: "CreditCard" },
    { name: "dollar-sign", Icon: DollarSign, importName: "DollarSign" },
    { name: "euro", Icon: Euro, importName: "Euro" },
    { name: "pound-sterling", Icon: PoundSterling, importName: "PoundSterling" },
    { name: "coins", Icon: Coins, importName: "Coins" },
    { name: "banknote", Icon: Banknote, importName: "Banknote" },
    { name: "wallet", Icon: Wallet, importName: "Wallet" },
    { name: "wallet-2", Icon: Wallet2, importName: "Wallet2" },
    { name: "tag", Icon: Tag, importName: "Tag" },
    { name: "tags", Icon: Tags, importName: "Tags" },
    { name: "ticket", Icon: Ticket, importName: "Ticket" },
    { name: "receipt", Icon: Receipt, importName: "Receipt" },
    { name: "percent", Icon: Percent, importName: "Percent" },
    { name: "badge-dollar-sign", Icon: BadgeDollarSign, importName: "BadgeDollarSign" },
  ],
  time: [
    { name: "calendar", Icon: Calendar, importName: "Calendar" },
    { name: "calendar-days", Icon: CalendarDays, importName: "CalendarDays" },
    { name: "calendar-check", Icon: CalendarCheck, importName: "CalendarCheck" },
    { name: "calendar-plus", Icon: CalendarPlus, importName: "CalendarPlus" },
    { name: "calendar-minus", Icon: CalendarMinus, importName: "CalendarMinus" },
    { name: "calendar-x", Icon: CalendarX, importName: "CalendarX" },
    { name: "calendar-range", Icon: CalendarRange, importName: "CalendarRange" },
    { name: "clock", Icon: Clock, importName: "Clock" },
    { name: "timer", Icon: TimerIcon, importName: "Timer" },
    { name: "hourglass", Icon: Hourglass, importName: "Hourglass" },
    { name: "watch", Icon: Watch, importName: "Watch" },
    { name: "alarm-clock", Icon: AlarmClock, importName: "AlarmClock" },
  ],
  weather: [
    { name: "sun", Icon: Sun, importName: "Sun" },
    { name: "moon", Icon: Moon, importName: "Moon" },
    { name: "cloud", Icon: Cloud, importName: "Cloud" },
    { name: "cloud-rain", Icon: CloudRain, importName: "CloudRain" },
    { name: "cloud-snow", Icon: CloudSnow, importName: "CloudSnow" },
    { name: "cloud-lightning", Icon: CloudLightning, importName: "CloudLightning" },
    { name: "cloud-fog", Icon: CloudFog, importName: "CloudFog" },
    { name: "wind", Icon: Wind, importName: "Wind" },
    { name: "snowflake", Icon: Snowflake, importName: "Snowflake" },
    { name: "tornado", Icon: Tornado, importName: "Tornado" },
    { name: "umbrella", Icon: Umbrella, importName: "Umbrella" },
    { name: "zap", Icon: Zap, importName: "Zap" },
    { name: "zap-off", Icon: ZapOff, importName: "ZapOff" },
    { name: "leaf", Icon: Leaf, importName: "Leaf" },
    { name: "flower", Icon: Flower, importName: "Flower" },
    { name: "sprout", Icon: Sprout, importName: "Sprout" },
    { name: "tree-deciduous", Icon: TreeDeciduous, importName: "TreeDeciduous" },
    { name: "tree-pine", Icon: TreePine, importName: "TreePine" },
    { name: "waves", Icon: Waves, importName: "Waves" },
    { name: "droplet", Icon: Droplet, importName: "Droplet" },
    { name: "sunrise", Icon: Sunrise, importName: "Sunrise" },
    { name: "sunset", Icon: Sunset, importName: "Sunset" },
  ],
  tech: [
    { name: "code", Icon: Code, importName: "Code" },
    { name: "code-2", Icon: Code2, importName: "Code2" },
    { name: "terminal", Icon: Terminal, importName: "Terminal" },
    { name: "terminal-square", Icon: TerminalSquare, importName: "TerminalSquare" },
    { name: "bug", Icon: Bug, importName: "Bug" },
    { name: "database", Icon: Database, importName: "Database" },
    { name: "server", Icon: Server, importName: "Server" },
    { name: "cloud-cog", Icon: CloudCog, importName: "CloudCog" },
    { name: "wifi", Icon: Wifi, importName: "Wifi" },
    { name: "wifi-off", Icon: WifiOff, importName: "WifiOff" },
    { name: "bluetooth", Icon: Bluetooth, importName: "Bluetooth" },
    { name: "usb", Icon: Usb, importName: "Usb" },
    { name: "hard-drive", Icon: HardDrive, importName: "HardDrive" },
    { name: "cpu", Icon: Cpu, importName: "Cpu" },
    { name: "memory-stick", Icon: MemoryStick, importName: "MemoryStick" },
    { name: "monitor", Icon: Monitor, importName: "Monitor" },
    { name: "keyboard", Icon: Keyboard, importName: "Keyboard" },
    { name: "mouse", Icon: Mouse, importName: "Mouse" },
    { name: "printer", Icon: Printer, importName: "Printer" },
    { name: "smartphone", Icon: Smartphone, importName: "Smartphone" },
    { name: "tablet", Icon: Tablet, importName: "Tablet" },
    { name: "laptop", Icon: Laptop, importName: "Laptop" },
    { name: "tv", Icon: Tv, importName: "Tv" },
    { name: "gamepad-2", Icon: Gamepad2, importName: "Gamepad2" },
    { name: "signal", Icon: Signal, importName: "Signal" },
    { name: "rss", Icon: Rss, importName: "Rss" },
    { name: "git-branch", Icon: GitBranch, importName: "GitBranch" },
    { name: "git-commit", Icon: GitCommit, importName: "GitCommit" },
    { name: "git-merge", Icon: GitMerge, importName: "GitMerge" },
    { name: "git-pull-request", Icon: GitPullRequest, importName: "GitPullRequest" },
  ],
  transport: [
    { name: "car", Icon: Car, importName: "Car" },
    { name: "car-front", Icon: CarFront, importName: "CarFront" },
    { name: "bike", Icon: Bike, importName: "Bike" },
    { name: "bus", Icon: Bus, importName: "Bus" },
    { name: "train", Icon: Train, importName: "Train" },
    { name: "plane", Icon: Plane, importName: "Plane" },
    { name: "plane-takeoff", Icon: PlaneTakeoff, importName: "PlaneTakeoff" },
    { name: "plane-landing", Icon: PlaneLanding, importName: "PlaneLanding" },
    { name: "ship", Icon: Ship, importName: "Ship" },
    { name: "sailboat", Icon: Sailboat, importName: "Sailboat" },
    { name: "rocket", Icon: Rocket, importName: "Rocket" },
    { name: "truck", Icon: Truck, importName: "Truck" },
    { name: "anchor", Icon: Anchor, importName: "Anchor" },
    { name: "fuel", Icon: Fuel, importName: "Fuel" },
    { name: "satellite", Icon: Satellite, importName: "Satellite" },
  ],
  building: [
    { name: "home", Icon: Home, importName: "Home" },
    { name: "building", Icon: Building, importName: "Building" },
    { name: "building-2", Icon: Building2, importName: "Building2" },
    { name: "hotel", Icon: Hotel, importName: "Hotel" },
    { name: "school", Icon: School, importName: "School" },
    { name: "church", Icon: Church, importName: "Church" },
    { name: "landmark", Icon: Landmark, importName: "Landmark" },
    { name: "factory", Icon: Factory, importName: "Factory" },
    { name: "warehouse", Icon: Warehouse, importName: "Warehouse" },
    { name: "door-open", Icon: DoorOpen, importName: "DoorOpen" },
    { name: "door-closed", Icon: DoorClosed, importName: "DoorClosed" },
    { name: "bed", Icon: Bed, importName: "Bed" },
    { name: "sofa", Icon: Sofa, importName: "Sofa" },
    { name: "armchair", Icon: Armchair, importName: "Armchair" },
    { name: "lamp", Icon: Lamp, importName: "Lamp" },
    { name: "lamp-desk", Icon: LampDesk, importName: "LampDesk" },
    { name: "lightbulb", Icon: Lightbulb, importName: "Lightbulb" },
    { name: "key", Icon: Key, importName: "Key" },
  ],
  charts: [
    { name: "bar-chart", Icon: BarChart, importName: "BarChart" },
    { name: "bar-chart-2", Icon: BarChart2, importName: "BarChart2" },
    { name: "bar-chart-3", Icon: BarChart3, importName: "BarChart3" },
    { name: "bar-chart-4", Icon: BarChart4, importName: "BarChart4" },
    { name: "bar-chart-big", Icon: BarChartBig, importName: "BarChartBig" },
    { name: "bar-chart-horizontal", Icon: BarChartHorizontal, importName: "BarChartHorizontal" },
    { name: "line-chart", Icon: LineChart, importName: "LineChart" },
    { name: "pie-chart", Icon: PieChart, importName: "PieChart" },
    { name: "area-chart", Icon: AreaChart, importName: "AreaChart" },
    { name: "trending-up", Icon: TrendingUp, importName: "TrendingUp" },
    { name: "trending-down", Icon: TrendingDown, importName: "TrendingDown" },
    { name: "activity", Icon: Activity, importName: "Activity" },
    { name: "binary", Icon: Binary, importName: "Binary" },
  ],
  tools: [
    { name: "wrench", Icon: Wrench, importName: "Wrench" },
    { name: "hammer", Icon: Hammer, importName: "Hammer" },
    { name: "gauge", Icon: Gauge, importName: "Gauge" },
    { name: "ruler", Icon: Ruler, importName: "Ruler" },
    { name: "paintbrush", Icon: Paintbrush, importName: "Paintbrush" },
    { name: "paintbrush-2", Icon: Paintbrush2, importName: "Paintbrush2" },
    { name: "paint-bucket", Icon: PaintBucket, importName: "PaintBucket" },
    { name: "palette", Icon: Palette, importName: "Palette" },
    { name: "pipette", Icon: Pipette, importName: "Pipette" },
    { name: "eraser", Icon: Eraser, importName: "Eraser" },
    { name: "cog", Icon: Cog, importName: "Cog" },
    { name: "construction", Icon: Construction, importName: "Construction" },
    { name: "wand", Icon: Wand, importName: "Wand" },
    { name: "wand-2", Icon: Wand2, importName: "Wand2" },
    { name: "workflow", Icon: Workflow, importName: "Workflow" },
  ],
  shapes: [
    { name: "square", Icon: SquareIcon, importName: "Square" },
    { name: "square-dot", Icon: SquareDot, importName: "SquareDot" },
    { name: "circle", Icon: CircleIcon, importName: "Circle" },
    { name: "circle-dot", Icon: CircleDot, importName: "CircleDot" },
    { name: "circle-dashed", Icon: CircleDashed, importName: "CircleDashed" },
    { name: "triangle", Icon: TriangleIcon, importName: "Triangle" },
    { name: "hexagon", Icon: Hexagon, importName: "Hexagon" },
    { name: "octagon", Icon: Octagon, importName: "Octagon" },
    { name: "diamond", Icon: Diamond, importName: "Diamond" },
    { name: "pentagon", Icon: Pentagon, importName: "Pentagon" },
    { name: "shapes", Icon: Shapes, importName: "Shapes" },
    { name: "star", Icon: StarIcon, importName: "Star" },
    { name: "heart", Icon: HeartShape, importName: "Heart" },
    { name: "sparkles", Icon: Sparkles, importName: "Sparkles" },
    { name: "sparkle", Icon: Sparkle, importName: "Sparkle" },
    { name: "flame", Icon: Flame, importName: "Flame" },
    { name: "gem", Icon: Gem, importName: "Gem" },
    { name: "crown", Icon: Crown, importName: "Crown" },
  ],
  misc: [
    { name: "globe", Icon: Globe, importName: "Globe" },
    { name: "globe-2", Icon: Globe2, importName: "Globe2" },
    { name: "link", Icon: Link, importName: "Link" },
    { name: "link-2", Icon: Link2, importName: "Link2" },
    { name: "external-link", Icon: ExternalLink, importName: "ExternalLink" },
    { name: "unlink", Icon: Unlink, importName: "Unlink" },
    { name: "briefcase", Icon: Briefcase, importName: "Briefcase" },
    { name: "package", Icon: Package, importName: "Package" },
    { name: "package-2", Icon: Package2, importName: "Package2" },
    { name: "archive", Icon: Archive, importName: "Archive" },
    { name: "book-open", Icon: BookOpen, importName: "BookOpen" },
    { name: "book", Icon: Book, importName: "Book" },
    { name: "library", Icon: Library, importName: "Library" },
    { name: "notebook", Icon: Notebook, importName: "Notebook" },
    { name: "github", Icon: Github, importName: "Github" },
    { name: "figma", Icon: Figma, importName: "Figma" },
    { name: "chrome", Icon: Chrome, importName: "Chrome" },
    { name: "aperture", Icon: Aperture, importName: "Aperture" },
    { name: "atom", Icon: Atom, importName: "Atom" },
    { name: "component", Icon: Component, importName: "Component" },
    { name: "layers", Icon: Layers, importName: "Layers" },
    { name: "blocks", Icon: Blocks, importName: "Blocks" },
    { name: "coffee", Icon: Coffee, importName: "Coffee" },
    { name: "pizza", Icon: Pizza, importName: "Pizza" },
    { name: "apple", Icon: Apple, importName: "Apple" },
    { name: "cherry", Icon: Cherry, importName: "Cherry" },
    { name: "brain", Icon: Brain, importName: "Brain" },
    { name: "dna", Icon: Dna, importName: "Dna" },
    { name: "pill", Icon: Pill, importName: "Pill" },
    { name: "stethoscope", Icon: Stethoscope, importName: "Stethoscope" },
    { name: "glasses", Icon: Glasses, importName: "Glasses" },
    { name: "microscope", Icon: Microscope, importName: "Microscope" },
    { name: "target", Icon: Target, importName: "Target" },
    { name: "crosshair", Icon: Crosshair, importName: "Crosshair" },
    { name: "dumbbell", Icon: Dumbbell, importName: "Dumbbell" },
    { name: "shirt", Icon: Shirt, importName: "Shirt" },
  ],
};

function IconGalleryContent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

  const categoryNames: Record<string, string> = {
    arrows: "Arrows & Navigation",
    actions: "Actions & Editing",
    layout: "UI & Layout",
    communication: "Communication",
    media: "Media & Files",
    status: "Status & Alerts",
    user: "User & People",
    commerce: "Commerce",
    time: "Time & Calendar",
    weather: "Weather & Nature",
    tech: "Technology",
    transport: "Transport",
    building: "Home & Building",
    charts: "Charts & Data",
    tools: "Settings & Tools",
    shapes: "Shapes & Design",
    misc: "Miscellaneous",
  };

  const totalIcons = useMemo(() => {
    return Object.values(ICON_CATALOG).reduce((sum, arr) => sum + arr.length, 0);
  }, []);

  const filteredIcons = useMemo(() => {
    let icons: IconEntry[] = [];

    if (selectedCategory === "all") {
      Object.values(ICON_CATALOG).forEach((categoryIcons) => {
        icons = [...icons, ...categoryIcons];
      });
      // Remove duplicates by name
      icons = icons.filter((icon, index, self) =>
        index === self.findIndex((t) => t.name === icon.name)
      );
    } else {
      icons = ICON_CATALOG[selectedCategory] || [];
    }

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      icons = icons.filter((icon) => icon.name.toLowerCase().includes(term) || icon.importName.toLowerCase().includes(term));
    }

    return icons;
  }, [searchTerm, selectedCategory]);

  const handleCopy = (importName: string) => {
    navigator.clipboard.writeText(importName);
    setCopiedIcon(importName);
    setTimeout(() => setCopiedIcon(null), 2000);
  };

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl font-semibold text-foreground">Icon Gallery</h1>
          <Badge variant="outline">{totalIcons} Icons</Badge>
        </div>
        <p className="text-muted-foreground">
          A curated collection of the most popular icons from Lucide React.
          Click any icon to copy its import name.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search icons..."
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="w-full md:w-auto overflow-x-auto">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="w-auto justify-start flex-wrap h-auto gap-1 p-1">
              <TabsTrigger value="all">All</TabsTrigger>
              {Object.keys(ICON_CATALOG).map((cat) => (
                <TabsTrigger key={cat} value={cat}>
                  {categoryNames[cat] || cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Icons ({filteredIcons.length})</CardTitle>
          <CardDescription>
            {selectedCategory === "all" ? "All categories" : (categoryNames[selectedCategory] || selectedCategory)}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {filteredIcons.map((icon) => (
              <div
                key={icon.name}
                className="flex flex-col items-center justify-center p-4 rounded-lg border hover:bg-muted/50 cursor-pointer transition-colors group relative"
                onClick={() => handleCopy(icon.importName)}
              >
                <icon.Icon className="h-8 w-8 mb-2 text-foreground/80 group-hover:text-primary transition-colors" />
                <span className="text-xs text-muted-foreground text-center break-all">
                  {icon.name}
                </span>
                {copiedIcon === icon.importName && (
                  <div className="absolute inset-0 flex items-center justify-center bg-primary/90 text-primary-foreground rounded-lg text-xs font-medium animate-in fade-in zoom-in duration-200">
                    Copied!
                  </div>
                )}
              </div>
            ))}
            {filteredIcons.length === 0 && (
              <div className="col-span-full py-12 text-center text-muted-foreground">
                No icons found matching your search.
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function IconGalleryPage() {
  return (
    <ComponentShowcase
      title="Icon Gallery"
      description="Curated collection of 400+ icons from Lucide React organized by category (Arrows, Actions, UI/Layout, Communication, Media, Status, User, Commerce, Time, Weather, Tech, Transport, Building, Charts, Tools, Shapes). Features real-time search, category filtering, and click-to-copy icon name. All icons are tree-shakeable — only imported icons are bundled."
      category="Design System"
      preview={<IconGalleryContent />}
      code={`import { Search, Home, User, Settings } from "lucide-react";

// Standard usage
<Search className="h-4 w-4" />
<Home className="h-5 w-5 text-primary" />
<User className="h-6 w-6 text-muted-foreground" />
<Settings className="h-4 w-4" strokeWidth={1.5} />

// In buttons
<Button><Plus className="h-4 w-4 mr-2" />Add</Button>

// In badges
<Badge><CheckCircle className="h-3 w-3 mr-1" />Done</Badge>`}
      props={[
        { name: "className", type: "string", description: "Tailwind classes for size (h-4 w-4) and color (text-primary)." },
        { name: "strokeWidth", type: "number", default: "2", description: "SVG stroke width. Use 1.5 for thinner lines." },
        { name: "size", type: "number", default: "24", description: "Width and height in pixels (prefer className for sizing)." },
        { name: "fill", type: "string", default: "none", description: "SVG fill color. Use 'currentColor' for filled icons." },
      ]}
    />
  );
}
