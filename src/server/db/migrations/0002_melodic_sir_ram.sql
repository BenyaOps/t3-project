ALTER TABLE `notworking_events_event` ADD `user_id` varchar(256) NOT NULL;--> statement-breakpoint
ALTER TABLE `notworking_events_event` ADD `location` varchar(256);--> statement-breakpoint
ALTER TABLE `notworking_events_event` ADD `date` timestamp;--> statement-breakpoint
ALTER TABLE `notworking_events_event` ADD `description` varchar(256);--> statement-breakpoint
ALTER TABLE `notworking_events_event` ADD `url_img` varchar(256);--> statement-breakpoint
ALTER TABLE `notworking_events_event` ADD `start_time` timestamp;--> statement-breakpoint
ALTER TABLE `notworking_events_event` ADD `end_time` timestamp;--> statement-breakpoint
ALTER TABLE `notworking_events_user` ADD `clerk_id` varchar(256);--> statement-breakpoint
ALTER TABLE `notworking_events_user` ADD `username` varchar(256);