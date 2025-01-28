CREATE TABLE `notworking_events_image` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`url` varchar(256),
	`title` varchar(256),
	CONSTRAINT `notworking_events_image_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE INDEX `url_idx` ON `notworking_events_image` (`url`);